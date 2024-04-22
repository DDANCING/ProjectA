import { FastifyInstance } from "fastify";
import { z } from "zod";
import { BadRequest } from "./_errors/bad-request";
import { prisma } from "../utils/prisma";

export async function getScoreboard(app: FastifyInstance) {
  app
    .get('/api/scoreboards', {
      schema: {
        summary: 'Obter placar de pontuação',
        tags: ['scoreboards'],
        response: {
          200: z.array(z.object({
            nome: z.string(),
            score: z.number(),
          })),
        },
      },
    }, async (request, reply) => {
      try {
        const scoreboards = await prisma.scoreboard.findMany({
          include: {
            User: true,
          },
        });

        // Ordenar placar de pontuação por score em ordem decrescente
        const sortedScoreboards = scoreboards
          .map(scoreboard => ({
            nome: scoreboard.User?.nome || 'Usuário desconhecido',
            score: scoreboard.mediaPontuacao,
          }))
          .sort((a, b) => b.score - a.score);

        // Enviar o placar de pontuação ordenado como resposta
        await reply.send(sortedScoreboards);
      } catch (error) {
        // Retornar um erro 400 em caso de exceção
        throw new BadRequest('Erro ao obter o placar de pontuação.');
      }
    });
}
