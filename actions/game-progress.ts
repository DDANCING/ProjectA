"use server";

import { db } from "@/lib/db";
import { checkAndUpdateFrequency } from "./set-frequency";

export const postProgressMusic = async (userId: string, musicId: number, percentage: number): Promise<number> => {
  
  try {
    // Buscar todas as músicas disponíveis no site
    const allMusics = await db.music.findMany({
      select: {
        id: true,
      },
    });

    const allMusicIds = allMusics.map((music) => music.id);
    checkAndUpdateFrequency(userId)
    // Contar o número de músicas que o usuário tocou (tem progresso)
    const completedMusics = await db.progressGameMusic.findMany({
      where: {
        userId: userId,
        musicId: {
          in: allMusicIds,
        },
      },
      select: {
        musicId: true,
        percentage: true,
      },
    });

    // Calcular a média apenas das músicas tocadas
    const playedMusicPercentages = completedMusics.map((music) => music.percentage);
    const progressPercentage = playedMusicPercentages.length > 0
      ? playedMusicPercentages.reduce((acc, percentage) => acc + percentage, 0) / playedMusicPercentages.length
      : 0;

    // Verificar se o ProgressGame já existe para o usuário
    const progressGame = await db.progressGame.findUnique({
      where: { userId },
    });

    let progressGameId: string;

    if (!progressGame) {
      // Criar um novo ProgressGame se não existir
      const newProgressGame = await db.progressGame.create({
        data: {
          userId,
          hearts: 5,
          points: 10,
          totalPercentage: progressPercentage,
          totalLastPercentageWin: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      progressGameId = newProgressGame.id;
    } else {
      progressGameId = progressGame.id;
    }

    // Atualizar o progresso da música específica
    const existingMusicProgress = await db.progressGameMusic.findUnique({
      where: {
        userId_musicId: { userId, musicId }, // combinando userId e musicId
      },
      select: {
        percentage: true,
      },
    });

    if (!existingMusicProgress || existingMusicProgress.percentage < percentage) {
      const lastPercentageWin = existingMusicProgress?.percentage || 0;

      // Atualizar o progresso total do jogo
      const totalMusicProgress = await db.progressGameMusic.findMany({
        where: {
          userId: userId,
          percentage: { gt: 0 },  // Considerar apenas músicas com progresso
        },
        select: {
          percentage: true,
        },
      });

      const totalProgressPercentage = totalMusicProgress.length > 0
        ? totalMusicProgress.reduce((acc, progress) => acc + progress.percentage, 0) / totalMusicProgress.length
        : 0;

      await db.progressGame.upsert({
        where: {
          userId,
        },
        update: {
          points: { increment: 50 }, // Incrementar 50 pontos
          totalPercentage: totalProgressPercentage, // média de todas as porcentagens jogadas
          totalLastPercentageWin: lastPercentageWin, // salve a última porcentagem antes de ser alterada
          updatedAt: new Date(),
        },
        create: {
          userId,
          hearts: 5,
          points: 50,
          totalPercentage: totalProgressPercentage,
          totalLastPercentageWin: lastPercentageWin,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      // Atualizar ou criar o progresso da música específica
      await db.progressGameMusic.upsert({
        where: {
          userId_musicId: { userId, musicId }, // combinando userId e musicId
        },
        update: {
          lastPercentageWin: lastPercentageWin, // Salvando a última porcentagem
          percentage: percentage, // Atualizar para a nova porcentagem
          updatedAt: new Date(),
        },
        create: {
          userId,
          musicId,
          lastPercentageWin: lastPercentageWin, // Salvando a última porcentagem ao criar
          percentage: percentage,
          progressGameId: progressGameId, // Incluindo progressGameId
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }

    return progressPercentage;
  } catch (error) {
    console.log("[POST_PROGRESS_MUSIC]", error);
    return 0;
  }
};

export const getProgressMusic = async (userId: string): Promise<{ totalPercentage: number; totalLastPercentageWin: number; points: number }> => {
  try {
    // Buscar todas as músicas disponíveis no site
    const getMusicPercentages = await db.progressGame.findFirst({
      where: {
        userId,
      },
      select: {
        totalPercentage: true,
        totalLastPercentageWin: true,
        points: true,
      }
    });
    
    // Retorna um objeto com os valores, usando 0 como fallback se undefined
    return {
      totalPercentage: getMusicPercentages?.totalPercentage ?? 0,
      totalLastPercentageWin: getMusicPercentages?.totalLastPercentageWin ?? 0,
      points: getMusicPercentages?.points ?? 0,
    };
  } catch (error) {
    console.log("[GET_PROGRESS_USER]", error);
    return { totalPercentage: 0, totalLastPercentageWin: 0, points: 0 };
  }
};