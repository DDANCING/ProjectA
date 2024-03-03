import fastify, { FastifyInstance } from 'fastify';
import { PrismaClient, Musica } from '@prisma/client';
import fastifyCors from '@fastify/cors';

const app: FastifyInstance = fastify({ logger: true });
const port = 3333;
const prisma = new PrismaClient();

// Habilitando o CORS
app.register(fastifyCors, { origin: '*' });

// Rota para obter todas as músicas
app.get('/musicas', async (request, reply) => {
  try {
    const musicas: Musica[] = await prisma.musica.findMany();
    reply.send(musicas);
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    reply.status(500).send({ error: 'Erro ao buscar músicas.' });
  }
});

// Restante do código mantido igual

app.listen(port, '0.0.0.0', (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`API está rodando em http://localhost:${port}/`);
});

