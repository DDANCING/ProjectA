import { PrismaClient } from '@prisma/client';
import { BadRequest } from './_errors/bad-request';
import { calcularMediaPontuacao } from './score-math';
import { prisma } from '../utils/prisma';


export async function CreateOrUpdateScore( usuarioId: number): Promise<void> {
  try {
    const mediaPontuacao = await calcularMediaPontuacao(usuarioId);

    const scoreExistente = await prisma.scoreboard.findFirst({
      where: {
        usuarioId,
      },
    });

    if (scoreExistente) {
      await prisma.scoreboard.update({
        where: { id: scoreExistente.id },
        data: { mediaPontuacao: mediaPontuacao },
      });
    } else {
      await prisma.scoreboard.create({
        data: {
          usuarioId: usuarioId,
          mediaPontuacao: mediaPontuacao,
        },
      });
    }
  } catch (error) {
    throw new BadRequest('Ocorreu um erro ao criar ou atualizar o score.');
  }
}