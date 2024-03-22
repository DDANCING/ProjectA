import z from "zod";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../utils/prisma";
import { generateCookie } from "../utils/CookieGenerator";

type RequestQuery = Record<string, string>;

export const postUserRouteHandler = async (app: FastifyInstance) => {
  const createNewUser = z.object({
    nome: z.string(),
    email: z.string().email(),
    senha: z.string(),
  });

  app.post<{ Querystring: RequestQuery }>('/api/newUser', async (request, reply) => {
    try {
      const { nome, email, senha } = createNewUser.parse(request.query);

      // Add your logic to create a new user with the parsed data
      // For example:
      const newUser: {
        id: number;
        nome: string;
        email: string;
        senha: string;
      } = await prisma.user.create({
        data: {
          nome,
          email,
          senha,
        },
      });

      // Call the component to generate the token and set the cookie
      const token = generateCookie("session", newUser.id.toString());
      reply.header("Set-Cookie", token);

      reply.send({ user: newUser, token }); // Send response with user data and token
    } catch (error: any) {
      console.error('Error creating a new user:', error);
      reply.status(400).send({ error: 'Invalid user data provided' }); // Handle error response
    }
  });
};
