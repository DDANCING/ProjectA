import { prisma } from "../utils/prisma";
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { BadRequest } from "./_errors/bad-request";

export async function getMusicPerformance(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/desempenho/:userId/:musicId', {
      schema: {
        summary: 'Desempenho do usuário na música',
        tags: ['desempenho'],
        params: z.object({
          musicId: z.coerce.number().int(),
          userId: z.coerce.number().int(),
        }),
        response: {
          200: z.object({
            desempenho: z.object({
              pontuacaoNaMusica: z.number(),
              Datadodesempenho: z.date(),

            })
          })
        },
      }
    }, async (request, reply) => {
      const { userId, musicId } = request.params;

      try {
        // Busca o desempenho do usuário na música específica
        const desempenho = await prisma.desempenho.findFirst({
          where: {
            usuarioId: userId,
            musicaId: musicId,
          },
          select: {
            pontuacao: true,
            updatedAt: true,
          },
        });

        if (!desempenho) {
          throw new BadRequest('Desempenho não encontrado.');
        }

        // Envia a resposta com o desempenho encontrado
        await reply.send({
          desempenho: {
            pontuacaoNaMusica: desempenho.pontuacao,
            Datadodesempenho: desempenho.updatedAt,
          }
        });
          
      } catch (error) {
        // Retorna um erro 400 caso haja uma exceção
        throw new BadRequest('Ocorreu um erro');
      }
    });
}
