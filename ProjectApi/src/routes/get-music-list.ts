import { FastifyInstance } from "fastify";
import { z } from "zod";
import { BadRequest } from "./_errors/bad-request";
import { prisma } from "../utils/prisma";

export async function GetMusicList(app: FastifyInstance) {
  app.get('/api/musicas', {
    schema: {
      summary: 'Listar todas as músicas',
      tags: ['musicas'],
      response: {
        200: z.array(z.object({
          id: z.number(),
          titulo: z.string(),
          artista: z.string(),
          linkYoutube: z.string(),
          tablatura: z.string(),
          capaAlbum: z.string(),
          tempoMinutos: z.number(),
          tempoSegundos: z.number(),
          afinacao: z.string(),
          createdAt: z.string(),
          updatedAt: z.string(),
        })),
      },
    },
  }, async (request, reply) => {
    try {
      const musicas = await prisma.musica.findMany({
        include: {
          
        },
      });

      await reply.send({
        musicas});
    } catch (error) {
      throw new BadRequest('Erro ao obter a lista de músicas.');
    }
  });
}
