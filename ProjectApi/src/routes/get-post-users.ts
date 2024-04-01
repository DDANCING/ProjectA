import { FastifyInstance } from 'fastify';
import { prisma } from '../utils/prisma';
import bcrypt from 'bcryptjs';

export async function registerRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.post<{ Body: { nome: string; email: string; senha: string; } }>(
    '/register',
    async (request, reply) => {
      const { nome, email, senha } = request.body;

      // valida entrada
      if (!nome || !email || !senha) {
        reply.code(400).send({ error: 'Nome, email e senha são necessários' });
        return;
      }

      // Hash 
      const hash = await bcrypt.hash(senha, 10);

      try {
        // Criar novo usuario
        const newUser = await prisma.user.create({
          data: {
            nome,
            email,
            senha: hash
          }
        });
        
        // setar o cookie de sessao 
        reply.header('Set-Cookie', `session=${newUser.id}; Path=/; Max-Age=${1000 * 60 * 60 * 24 * 7}; HttpOnly`);

        reply.code(201).send({ message: 'User created.', user: newUser });
      } catch (error) {
        reply.code(500).send({ error: 'Error creating user.' });
      }
    }
  );

  fastify.post<{ Body: { email: string; senha: string; } }>(
    '/login',
    async (request, reply) => {
      const { email, senha } = request.body;

      // valida
      if (!email || !senha) {
        reply.code(400).send({ error: 'Email e senha são requeridos.' });
        return;
      }

      // procurar usuário pelo email
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        reply.code(404).send({ error: 'usuario não existe.' });
        return;
      }

      // comparar a senha com o hash armazenado
      const isMatch = await bcrypt.compare(senha, user.senha);

      if (!isMatch) {
        reply.code(401).send({ error: 'Senha invalida.' });
        return;
      }

      // setar o cookie de sessao 
      reply.header('Set-Cookie', `session=${user.id}; Path=/; Max-Age=${1000 * 60 * 60 * 24 * 7}; HttpOnly`);

      reply.send({ message: 'Login bem sucedido.', user });
    }
  );
}