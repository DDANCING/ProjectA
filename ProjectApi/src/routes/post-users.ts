import { prisma } from "../utils/prisma";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { generateCookie } from "../utils/cookie-generator";
import bcrypt from 'bcryptjs';

type RequestQuery = Record<string, string>;

const createNewUser = z.object({
  nome: z.string(),
  email: z.string().email(),
  senha: z.string(),
});

export const postUserRouteHandler = async (app: FastifyInstance) => {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post<{ Querystring: RequestQuery }>(
      '/api/newUser',
      {
        schema: {
          tags: ['Usuario'],
          summary: 'Criar novo usuario',
          body: createNewUser,
          response: {
            200: z.object({
              user: z.object({
                id: z.number(),
                nome: z.string(),
                email: z.string().email(),
                senha: z.string(),
              }),
              token: z.string(),
            }),
          },
        },
      },
      async (request: FastifyRequest<{ Querystring: RequestQuery }>, reply: FastifyReply) => {
        try {
          const { nome, email, senha } = createNewUser.parse(request.body);

          const hash = await bcrypt.hash(senha, 10);
          const newUser: {
            id: number;
            nome: string;
            email: string;
            senha: string;
          } = await prisma.user.create({
            data: {
              nome,
              email,
              senha: hash
            },
          });

          // Call the component to generate the token and set the cookie
          const token = generateCookie("session", newUser.id.toString());
          reply.header("Set-Cookie", token);

          reply.send({ user:
             newUser,
             token 
            }); // Send response with user data and token
        } catch (error: any) {
          console.error('Error creating a new user:', error);
          reply.status(400).send({ error: 'Invalid user data provided' }); // Handle error response
        }
      }
    );
};