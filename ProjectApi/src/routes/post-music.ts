import { FastifyInstance } from "fastify";
import { z } from "zod";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { BadRequest } from "./_errors/bad-request";
import { prisma } from "../utils/prisma";

export async function PostMusic(app: FastifyInstance) {
  
  app
  .withTypeProvider<ZodTypeProvider>()
  .post('/create/music', {
    schema: {
      summary: 'Criar uma nova música',
      tags: ['musicas'],
      body: z.object({
        titulo: z.string(),
        artista: z.string(),
        linkYoutube: z.string().url(),
        tablatura: z.string(),
        capaAlbum: z.string().url(),
        tempoMinutos: z.number().int().min(0).max(59),
        tempoSegundos: z.number().int().min(0).max(59),
        afinacao: z.string(),
      }),
      response: {
        201: z.object({
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
      const { titulo, artista, linkYoutube, tablatura, capaAlbum, tempoMinutos, tempoSegundos, afinacao} = request.body;
try {
      const novaMusica = await prisma.musica.create({
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

      await reply.code(201).send( novaMusica,
       );
    } catch (error) {
      console.error(error);
      throw new BadRequest('Erro ao criar a música.');
    }
  });
}