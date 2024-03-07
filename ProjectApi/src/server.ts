import fastify, { FastifyInstance } from 'fastify';
import { PrismaClient, Musica, Scoreboard, User } from '@prisma/client';
import fastifyCors from '@fastify/cors';

const app: FastifyInstance = fastify({ logger: true });
const port = 3333;
const prisma = new PrismaClient();

// Habilitando o CORS
app.register(fastifyCors, { origin: '*' });

app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users); // Use send em vez de json
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erro ao obter a lista de usuários.' }); // Use send aqui também
  }
});

app.get('/api/scoreboards', async (req, res) => {
  try {
    const scoreboards = await prisma.scoreboard.findMany({
      include: {
        User: true,
      },
    });
    

    const sortedScoreboards = scoreboards
  .map((scoreboard) => ({
    nome: scoreboard.User?.nome || 'Usuário desconhecido',
    score: scoreboard.mediaPontuacao,
  }))
  .sort((a, b) => b.score - a.score);

    res.send(sortedScoreboards); // Use send em vez de json
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erro ao obter a lista de scoreboards.' }); // Use send aqui também
  }
});

app.get('/musicas', async (request, reply) => {
  try {
    const musicas: Musica[] = await prisma.musica.findMany();
    reply.send(musicas);
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    reply.status(500).send({ error: 'Erro ao buscar músicas.' });
  }
});

app.listen(port, '0.0.0.0', (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`API está rodando em http://localhost:${port}/`);
});
