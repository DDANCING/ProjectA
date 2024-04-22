import { prisma } from "../utils/prisma";
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { BadRequest } from "./_errors/bad-request";
import { CreateOrUpdateScore } from "../utils/score-update";

export async function createOrUpdatePerformance(app: FastifyInstance) {
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
          if (pontuacao > desempenho.pontuacao) {
            await prisma.desempenho.update({
              where: { id: desempenho.id },
              data: { pontuacao },
            });
          } 
        } else {
          await prisma.desempenho.create({
            data: {
              usuarioId: userId,
              musicaId: musicId,
              pontuacao,
            },
          });
        }

        await CreateOrUpdateScore(userId);

        // Buscar o desempenho atualizado após a criação ou atualização
        desempenho = await prisma.desempenho.findFirst({
          where: {
            usuarioId: userId,
            musicaId: musicId,
          },
        });

        if (!desempenho) {
          throw new Error('Erro ao encontrar o desempenho após a criação ou atualização.');
        }

        await reply.send({
          message: 'Desempenho atual',
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
