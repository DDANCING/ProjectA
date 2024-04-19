import { FastifyInstance } from "fastify";
import { z } from "zod";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { BadRequest } from "./_errors/bad-request";
import { prisma } from "../utils/prisma";
import bcrypt from 'bcryptjs';
import { generateCookie } from "../utils/cookie-generator";
import { error } from "console";


const updateUserSchema = z.object({
  id: z.string(),
  nome: z.string().optional(),
  email: z.string().email().optional(),
  senha: z.string().optional(),
});

export async function updateUserRouteHandler(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .put('/api/updateUser/:id', {
      schema: {
        tags: ['Usuario'],
        summary: 'Atualizar usuario',
        params: z.object({
          id: z.string(),
        }),
        body: updateUserSchema.omit({ id: true }),
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
    }, async (request, reply) => {
      const { id } = request.params;
      const idNumber = parseInt(id, 10); 
      const { nome, email, senha } = request.body;

      try {
        const user = await prisma.user.findUnique({
          where: { id: idNumber },
        });

        if (!user) {
          reply.code(404).send();
          return console.error(error);
        }

        const hash = await bcrypt.hash(senha || user.senha, 10);
        const updatedUser = await prisma.user.update({
          where: { id: idNumber },
          data: {
            nome: nome || user.nome,
            email: email || user.email,
            senha: hash,
          },
        });

        const token = generateCookie("session", updatedUser.id.toString());
        reply.header("Set-Cookie", token);

        reply.code(200).send();
      } catch (error) {
        console.error(error);
        throw new BadRequest('Erro ao atualizar usuário.');
      }
    });
}
