import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const logoutUserRouteHandler = async (app: FastifyInstance) => {
  app
    .delete<{ Querystring: { sessionId: string } }>(
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
        // Obter o ID da sessão da parte de consulta da solicitação
        const sessionId = request.query.sessionId;

        // Excluir a sessão da memória
        delete sessionStorage[sessionId];

        // Enviar uma resposta de sucesso com o cabeçalho Set-Cookie
        reply.code(200)
          .header('Set-Cookie', `session=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax`)
          .send({
            message: 'Usuário deslogado com sucesso.',
          });
      }
    );
};