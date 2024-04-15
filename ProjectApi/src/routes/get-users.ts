import { prisma } from "../utils/prisma";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { generateCookie } from "../utils/cookie-generator";
import bcrypt from 'bcryptjs';

type RequestQuery = Record<string, string>;

export const getUserRouteHandler = async (app: FastifyInstance) => {
  const getUser = z.object({
    email: z.string().email(),
    senha: z.string(),
  });

  app
    .withTypeProvider<ZodTypeProvider>()
    .post<{ Querystring: RequestQuery }>(
      '/api/login',
      {
        schema: {
          tags: ['Usuario'],
          summary: 'Logar usuario',
          body: getUser,
          response: {
            201: z.object({
              message: z.string(),
              user: z.object({
                id: z.number(),
                nome: z.string(),
                email: z.string().email(),
              }),
              token: z.string(), 
            }),
          },
        },
      },
      async (request: FastifyRequest<{ Querystring: RequestQuery }>, reply: FastifyReply) => {
        try {
          const { email, senha } = getUser.parse(request.body);

          // valida entrada
          if (!email || !senha) {
            reply.code(400).send({ error: 'Email e senha são necessários' });
            return;
          }

          try {
            //encontra usuario com email
            const user = await prisma.user.findUnique({
              where: {
                email,
              }
            });

            if (!user) {
              reply.code(404).send({ error: 'Usuário não encontrado.' });
              return;
            }

            // Comparar senha
            const passwordMatch = await bcrypt.compare(senha, user.senha);

            if (!passwordMatch) {
              reply.code(401).send({ error: 'Credenciais inválidas.' });
              return;
            }

            // Call the component to generate the token and set the cookie
            const token = generateCookie("session", user.id.toString());
            reply.header("Set-Cookie", token);

            reply.code(201).send({ message: 'Usuário logado.', 
            user: { id: user.id, nome: user.nome, email: user.email }, 
            token: token 
          });
          } catch (error) {
            console.error('Error in login:', error);
            reply.code(500).send({ error: 'Erro no login.' });
          }
        } catch (error) {
          console.error('Invalid user data provided:', error);
          reply.code(400).send({ error: 'Dados de usuário inválidos fornecidos.' });
        }
      }
    );
};
