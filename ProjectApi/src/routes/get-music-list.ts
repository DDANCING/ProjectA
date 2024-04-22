import { FastifyInstance } from "fastify";
import { z } from "zod"
import { BadRequest } from "./_errors/bad-request";
import { prisma } from "../utils/prisma";

export async function getMusicList(app: FastifyInstance) {
  app.get('/api/musicas', {
    schema: {
      summary: 'Obter lista de músicas',
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
          createdAt: z.date(),
          updatedAt: z.date(),
        })),
      },
    },
  }, async (request, reply) => {
    try {
      const musicas = await prisma.musica.findMany();

      // Ordenar músicas por título (nome) em ordem alfabética
      const sortedMusics = musicas
        .map(musica => ({
          id: musica.id,
          titulo: musica.titulo,
          artista: musica.artista,
          linkYoutube: musica.linkYoutube,
          tablatura: musica.tablatura,
          capaAlbum: musica.capaAlbum,
          tempoMinutos: musica.tempoMinutos,
          tempoSegundos: musica.tempoSegundos,
          afinacao: musica.afinacao,
          createdAt: musica.createdAt,
          updatedAt: musica.updatedAt
          
        }))
        .sort((a, b) => a.titulo.localeCompare(b.titulo));

      // Enviar a lista de músicas ordenada como resposta
      await reply.code(201).send( sortedMusics,
      );
    } catch (error) {
      // Retornar um erro 400 em caso de exceção
      throw new BadRequest('Erro ao obter a lista de músicas.');
    }
  });
}
