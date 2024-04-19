import { prisma } from "../utils/prisma";
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { BadRequest } from "./_errors/bad-request";
import { CreateOrUpdateScore } from "./score-update";

export async function CreateOrUpdatePerformance (app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post('/desempenho', {
      schema: {
        summary: 'Criar ou atualizar desempenho do usuário em uma música',
        tags: ['desempenho'],
        body: z.object({
          userId: z.number().int(),
          musicId: z.number().int(),
          pontuacao: z.number().int(),
        }),
        response: {
          200: z.object({
            message: z.string(),
            desempenho: z.object({
              pontuacaoNaMusica: z.number(),
              Datadodesempenho: z.date(),
            }),
          }),
        },
      },
    }, async (request, reply) => {
      const { userId, musicId, pontuacao } = request.body;

      try {
        // Verifica se já existe um desempenho para o usuário e a música especificados
        let desempenho = await prisma.desempenho.findFirst({
          where: {
            usuarioId: userId,
            musicaId: musicId,
          },
        });

        if (desempenho) {
          // Se já existe um desempenho, atualiza-o apenas se a pontuação for maior que a anterior
          if (pontuacao > desempenho.pontuacao) {
            CreateOrUpdateScore(userId)
            desempenho = await prisma.desempenho.update({
              where: { id: desempenho.id },
              data: { pontuacao },
            });
          } else {
            throw new BadRequest('A pontuação deve ser maior que a anterior.');
          }
        } else {
          CreateOrUpdateScore(userId)
          desempenho = await prisma.desempenho.create({
            data: {
              usuarioId: userId,
              musicaId: musicId,
              pontuacao,
            },
          });

        }
        await reply.send({
          message: desempenho ? 'Desempenho criado ou atualizado com sucesso.' : 'Erro ao criar ou atualizar desempenho.',
          desempenho: {
            pontuacaoNaMusica: desempenho.pontuacao,
            Datadodesempenho: desempenho.updatedAt,
          },
        });
          
      } catch (error) {
      
        throw new BadRequest('Ocorreu um erro ao criar ou atualizar desempenho.');
      }
    });
}
