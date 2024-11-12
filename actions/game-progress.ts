"use server";

import { db } from "@/lib/db";
import { checkAndUpdateFrequency } from "./set-frequency";
import { revalidatePath } from "next/cache";

export const postProgressMusic = async (userId: string, musicId: number, percentage: number): Promise<number> => {
  try {
    // Garantir que musicId é um número
    musicId = Number(musicId);

    // Buscar todas as músicas disponíveis no site
    const allMusics = await db.music.findMany({
      select: { id: true },
    });

    const allMusicIds = allMusics.map((music) => music.id);
    checkAndUpdateFrequency(userId);

    // Contar o número de músicas que o usuário tocou (tem progresso)
    const completedMusics = await db.progressGameMusic.findMany({
      where: {
        userId,
        musicId: { in: allMusicIds },
      },
      select: { musicId: true, percentage: true },
    });

    // Calcular a média apenas das músicas tocadas
    const playedMusicPercentages = completedMusics.map((music) => music.percentage);
    const progressPercentage = playedMusicPercentages.length
      ? playedMusicPercentages.reduce((acc, percentage) => acc + percentage, 0) / playedMusicPercentages.length
      : 0;

    // Verificar se o ProgressGame já existe para o usuário
    const progressGame = await db.progressGame.findUnique({
      where: { userId },
    });

    let progressGameId = progressGame ? progressGame.id : await createProgressGame(userId, progressPercentage);

    // Atualizar o progresso da música específica
    const existingMusicProgress = await db.progressGameMusic.findUnique({
      where: { userId_musicId: { userId, musicId } },
      select: { percentage: true },
    });

    if (!existingMusicProgress || existingMusicProgress.percentage < percentage) {
      const lastPercentageWin = existingMusicProgress?.percentage || 0;

      // Atualizar o progresso total do jogo
      await updateGameProgress(userId, lastPercentageWin);

      // Atualizar ou criar o progresso da música específica
      await db.progressGameMusic.upsert({
        where: { userId_musicId: { userId, musicId } },
        update: {
          lastPercentageWin,
          percentage,
          updatedAt: new Date(),
        },
        create: {
          userId,
          musicId,
          lastPercentageWin,
          percentage,
          progressGameId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }
    revalidatePath(`/game/${musicId}`);
    return progressPercentage;
  } catch (error) {
    console.log("[POST_PROGRESS_MUSIC]", error);
    return 0;
  }
};

// Função para criar o ProgressGame se não existir
const createProgressGame = async (userId: string, progressPercentage: number) => {
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
  return newProgressGame.id;
};

// Função para atualizar o progresso total do jogo
const updateGameProgress = async (userId: string, lastPercentageWin: number) => {
  const totalMusicProgress = await db.progressGameMusic.findMany({
    where: { userId, percentage: { gt: 0 } },
    select: { percentage: true },
  });

  const totalProgressPercentage = totalMusicProgress.length
    ? totalMusicProgress.reduce((acc, progress) => acc + progress.percentage, 0) / totalMusicProgress.length
    : 0;

  await db.progressGame.upsert({
    where: { userId },
    update: {
      points: { increment: 50 },
      totalPercentage: totalProgressPercentage,
      totalLastPercentageWin: lastPercentageWin,
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
};


export const getProgressMusic = async (userId: string): Promise<{ totalPercentage: number; totalLastPercentageWin: number; points: number; hearts: number }> => {
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
        hearts: true,
      }
    });
    
    // Retorna um objeto com os valores, usando 0 como fallback se undefined
    return {
      totalPercentage: getMusicPercentages?.totalPercentage ?? 0,
      totalLastPercentageWin: getMusicPercentages?.totalLastPercentageWin ?? 0,
      points: getMusicPercentages?.points ?? 0,
      hearts: getMusicPercentages?.hearts ?? 5,
    };
  } catch (error) {
    console.log("[GET_PROGRESS_USER]", error);
    return { totalPercentage: 0, totalLastPercentageWin: 0, points: 0, hearts: 5 };
  }
};

export const ensureProgressGameExists = async (userId: string): Promise<string> => {
  try {
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
          hearts: 5, // Definir o número inicial de corações
          points: 10, // Pontos iniciais
          totalPercentage: 0, // Percentual médio de progresso inicial
          totalLastPercentageWin: 0, // Última porcentagem de ganho (inicial)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      progressGameId = newProgressGame.id;
    } else {
      progressGameId = progressGame.id;
    }

    return progressGameId;
  } catch (error) {
    console.log("[ENSURE_PROGRESS_GAME_EXISTS]", error);
    throw new Error("Failed to ensure progress game exists");
  }
};