import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function GetUsers(app:FastifyInstance) {
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users); // Use send em vez de json
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erro ao obter a lista de usuários.' }); // Use send aqui também
  }
})
};