import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const logoutUserRouteHandler = async (app: FastifyInstance) => {
  app
    .post<{ Querystring: { sessionId: string } }>(
      '/api/logout',
      {
        schema: {
          tags: ['Usuario'],
          summary: 'Deslogar usuario',
          response: {
            200: z.object({
              message: z.string(),
            }),
          },
        },
      },
      async (request: FastifyRequest<{ Querystring: { sessionId: string } }>, reply: FastifyReply) => {
        try {
          // Set the session cookie to an expired date
          reply.header('session', '0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; HttpOnly; SameSite=Lax');
          reply.send({ message: 'Logout successful' });
        } catch (error: any) {
          console.error('Error during logout:', error);
          reply.status(400).send({ error: 'Invalid request' });
        }
      });
    }