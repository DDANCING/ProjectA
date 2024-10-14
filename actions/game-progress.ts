"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const postProgressMusic = async (userId: string): Promise<number> => {
  const user = await auth()
  try {
    // Buscar todas as músicas disponíveis no site
    const allMusics = await db.music.findMany({
      select: {
        id: true,
      },
    });

    const allMusicIds = allMusics.map((music) => music.id);

    // Contar o número de músicas que o usuário tocou (tem progresso)
    const completedMusics = await db.performace.findMany({
      where: {
        userId: userId,
        musicId: {
          in: allMusicIds,
        },
      },
      select: {
        musicId: true,
        average: true,
      },
    });

    // Criar um array com todas as porcentagens (0 para músicas não tocadas)
    const musicPercentages = allMusicIds.map((musicId) => {
      const musicProgress = completedMusics.find(
        (performance) => performance.musicId === musicId
      );
      return musicProgress ? musicProgress.average : 0;
    });

    // Calcular a média de todas as porcentagens
    const progressPercentage =
      musicPercentages.reduce((acc, percentage) => acc + percentage, 0) / allMusicIds.length;

    const existingProgress = await db.progressGameMusic.findUnique({
      where: {
        userId: userId,
      },
      select: {
        percentage: true,
      },
    });

    const lastPercentageWin = existingProgress?.percentage || 0;

    await db.progressGameMusic.upsert({
      where: {
         userId: userId,
      },
      update: {
        lastPercentageWin: lastPercentageWin, // Salvando a última porcentagem
        points: { increment: 10 }, // Incrementar os pontos
        percentage: progressPercentage,
        updatedAt: new Date(),
      },
      create: {
        lastPercentageWin: lastPercentageWin, // Salvando a última porcentagem ao criar
        userId,
        musicId: 0, // Defina se necessário
        hearts: 5, // Exemplo, ajuste se necessário
        points: 10,
        percentage: progressPercentage,
        gameMusicModuleId: 1,
        userName: user?.user.name || "name",
        userImageSrc: user?.user.image || "TODO: IMAGE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return progressPercentage;
  } catch (error) {
    console.log("[GET_PROGRESS_MUSIC]", error);
    return 0;
  }
};

export const getUserPercentageMusic = async (
  userId: string,
): Promise<{ points: number, percentage: number, lastPercentageWin: number }> => {
  try {
    const getUserPercentage = await db.progressGameMusic.findFirst({
      where: {
        userId: userId,
      },
      select: {
        points: true,
        percentage: true,
        lastPercentageWin: true,
      },
    });

    return {
      points: getUserPercentage?.points || 0,
      percentage: getUserPercentage?.percentage || 0,
      lastPercentageWin: getUserPercentage?.lastPercentageWin || 0,
    };
  } catch (error) {
    console.log("[GET_PERCENTAGE_MUSIC]", error);
    return {
      points: 0,
      percentage: 0,
      lastPercentageWin: 0,
    };
  }
};
