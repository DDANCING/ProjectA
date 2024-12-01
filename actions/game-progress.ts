"use server";

import { db } from "@/lib/db";
import { checkAndUpdateFrequency } from "./set-frequency";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { randomUUID } from "crypto";

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
   const user = await auth();
  const newProgressGame = await db.progressGame.create({
    data: {
      userId,
      userName: user?.user.name || `user${randomUUID}`,
      userImageSrc: user?.user.image || "TODO.svg",
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
  const user = await auth();
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
      userName: user?.user.name || `user${randomUUID}`,
      userImageSrc: user?.user.image || "TODO.svg",
      points: { increment: 50 },
      totalPercentage: totalProgressPercentage,
      totalLastPercentageWin: lastPercentageWin,
      updatedAt: new Date(),
    },
    create: {
      userName: user?.user.name || `user${randomUUID}`,
      userImageSrc: user?.user.image || "TODO.svg",
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
export const updateUserTotalGameProgressPercentage = async (userId: string): Promise<void> => {
  try {
    // Buscar todas as músicas disponíveis no aplicativo
    const allMusics = await db.music.findMany({
      select: { id: true },
    });
    const totalMusicsCount = allMusics.length;

    if (totalMusicsCount === 0) {
      console.warn("Nenhuma música encontrada no aplicativo.");
      return;
    }

    // Buscar todos os registros de `ProgressGameMusic` do usuário especificado
    const userProgressMusic = await db.progressGameMusic.findMany({
      where: { userId },
      select: { percentage: true },
    });

    // Somar as porcentagens de progresso do usuário
    const totalUserPercentage = userProgressMusic.reduce(
      (acc, { percentage }) => acc + percentage,
      0
    );

    // Calcular a média dividindo pela quantidade total de músicas
    const averagePercentage = totalUserPercentage / totalMusicsCount;

    // Buscar o valor atual de `totalPercentage` para armazená-lo em `totalLastPercentageWin`
    const userProgress = await db.progressGame.findUnique({
      where: { userId },
      select: { totalPercentage: true },
    });

    // Atualizar `totalPercentage` e `totalLastPercentageWin` no modelo `ProgressGame` para o usuário
    await db.progressGame.update({
      where: { userId },
      data: {
        totalLastPercentageWin: userProgress?.totalPercentage || 0, // Salvar o totalPercentage atual
        totalPercentage: Math.round(averagePercentage), // Atualizar com a nova média
      },
    });

    console.log(`TotalPercentage e TotalLastPercentageWin atualizados para o usuário ${userId}.`);
  } catch (error) {
    console.error("[UPDATE_USER_TOTAL_PROGRESS_PERCENTAGE]", error);
    throw new Error("Erro ao atualizar totalPercentage para o usuário");
  }
};
