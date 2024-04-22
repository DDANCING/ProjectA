import { FastifyInstance } from "fastify";
import { z } from "zod";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { BadRequest } from "./_errors/bad-request";
import { prisma } from "../utils/prisma";

export async function updateMusic(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .put('/update/music/:id', {
      schema: {
        summary: 'Atualizar uma música',
        tags: ['musicas'],
        params: z.object({
          id: z.string(),
        }),
        body: z.object({
          titulo: z.string().optional(),
          artista: z.string().optional(),
          linkYoutube: z.string().url().optional(),
          tablatura: z.string().optional(),
          capaAlbum: z.string().url().optional(),
          tempoMinutos: z.number().int().min(0).max(59).optional(),
          tempoSegundos: z.number().int().min(0).max(59).optional(),
          afinacao: z.string().optional(),
        }),
        response: {
          200: z.object({
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
          }),
        },
      },
    }, async (request, reply) => {
      const { id } = request.params;
      const idNumber = parseInt(id, 10); 
      const { titulo, artista, linkYoutube, tablatura, capaAlbum, tempoMinutos, tempoSegundos, afinacao } = request.body;

      try {
        const musica = await prisma.musica.update({
          where: {
            id: idNumber, 
          },
          data: {
            titulo,
            artista,
            linkYoutube,
            tablatura,
            capaAlbum,
            tempoMinutos,
            tempoSegundos,
            afinacao,
          },
        });

        reply.code(200).send(musica);
      } catch (error) {
        console.error(error);
        throw new BadRequest('Erro ao atualizar a música.');
      }
    });
}