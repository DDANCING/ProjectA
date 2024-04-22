import { FastifyInstance } from "fastify";
import { z } from "zod"
import { BadRequest } from "./_errors/bad-request";

export async function ready(app: FastifyInstance) {
  app.get('/ready', {
    schema: {
      summary: 'server check',
      tags: ['health'],
      response: {
        200: z.object({
          message: z.string(),
        })
      }
    }
  }, async () => {
    return {
      message: "Server is ready"
    }
  });

  // Error handling for invalid request
  app.setErrorHandler((error, request, reply) => {
    if (error instanceof z.ZodError) {
      return reply.code(400).send();
    }
    return reply.code(500).send(new BadRequest('Invalid request'));
  });
}