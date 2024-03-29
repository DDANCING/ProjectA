import { Musica } from "@prisma/client";
import { prisma } from "../utils/prisma";
import { FastifyInstance } from "fastify";


export async function GetMusic(app:FastifyInstance) {
app.get('/musicas', async (request, reply) => {
  try {
    const musicas: Musica[] = await prisma.musica.findMany();
    reply.send(musicas);
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    reply.status(500).send({ error: 'Erro ao buscar músicas.' });
  }
})
};