import { PrismaClient } from '@prisma/client';
import { BadRequest } from './_errors/bad-request';
import { prisma  } from '../utils/prisma';

export async function calcularMediaPontuacao(usuarioId: number): Promise<number> {
  try {
    // Busca todas as pontuações do usuário
    const desempenhos = await prisma.desempenho.findMany({
      where: {
        usuarioId,
      },
      select: {
        pontuacao: true,
      },
    });

    // Calcula a soma das pontuações
    const somaPontuacoes = desempenhos.reduce((acc, curr) => acc + curr.pontuacao, 0);

    // Calcula a média das pontuações
    const mediaPontuacao = somaPontuacoes / desempenhos.length;

    return mediaPontuacao;
  } catch (error) {
    throw new BadRequest('Ocorreu um erro ao calcular a média das pontuações.');
  }
}