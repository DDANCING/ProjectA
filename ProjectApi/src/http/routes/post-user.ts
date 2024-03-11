import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../../lib/prisma";
import jwt from 'jsonwebtoken'; 

export async function PostUsers(app:FastifyInstance) {
app.post('/api/newUser', async (request, reply) => {
  const createNewUser = z.object({
    nome: z.string(),
    email: z.string().email(),
    senha: z.string(),
  });

  try {
    const { nome, email, senha } = createNewUser.parse(request.body);

    const newUser = await prisma.user.create({
      data: {
        nome,
        email,
        senha,
      },
    });

    // gera o jwt token
    const token = jwt.sign({ userId: newUser.id }, 'your-secret-key', { expiresIn: '30d' });

    // seta o cokkie
    reply.setCookie('token', token, {
      path: '/',
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
    });

    reply.send({ user: newUser, token });
  } catch (error) {
    console.error('Erro ao criar novo usuário:', error);
    reply.status(500).send({ error: 'Erro ao criar novo usuário.' });
  }
})
};