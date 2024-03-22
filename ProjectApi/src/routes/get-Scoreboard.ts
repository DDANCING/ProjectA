import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma";

export async function GetScoreboard(app:FastifyInstance) {
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
})
};
