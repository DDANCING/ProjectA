"use server"

import { db } from "@/lib/db";

export const scoreBoard = async () => {
  try {
    const scoreboards = await db.scoreboard.findMany({
      include: {
        User: true,
      },
    });

    // Ordenar placar de pontuação por score em ordem decrescente
    const sortedScoreboards = scoreboards
      .map(scoreboard => ({
        nome: scoreboard.User?.name || 'Usuário desconhecido',
        score: scoreboard.averagescore,
      }))
      .sort((a, b) => b.score - a.score);

    // Enviar o placar de pontuação ordenado como resposta
    return (sortedScoreboards)
  } catch (error) {
    // Retornar um erro 400 em caso de exceção
    return ('Erro ao obter o placar de pontuação.');
  }
}
