"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { cache } from "react";
import { getExerciseProgress } from "./get-exercise-progress";



export const getMusics = async (userId: string) => {
  try {
    const musics = await db.music.findMany({
      where: {
        ProgressGameMusic: {
          some: {
            userId,
          },
        },
      },
      include: {
        ProgressGameMusic: {
          where: {
            userId,
          },
          include: {
            progressGame: {
              select: {
                points: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Log para verificar retorno
    return musics;
  } catch (error) {
    console.error("[GET_MUSICS]", error);
    return [];
  }
};
export const getNewMusics = async (title: string) => {
  try {
    const newMusics = await db.music.findMany({
      where: {
        title: {
          contains: title, 
          mode: 'insensitive', 
        },
      },
      orderBy: {
        createdAt: "asc",
      },
      select: {
        id: true,
        title: true,
        artist: true,
        coverAlbum: true,
        ProgressGameMusic: {
          select: {
            percentage: true,
          },
        },
      },
    });

    // Log para verificar retorno
    return newMusics;
  } catch (error) {
    console.error("[GET_NEW_MUSICS]", error);
    return [];
  }
};

export const getMusic = cache(async (gameId: number) => {
  const user = await auth();

  if (!user?.user.id) {
    return null;
  }

  const MusicIdInt = parseInt(String(gameId), 10);

  const data = await db.music.findFirst({
    where: {
      id: MusicIdInt,
    },
    include: {
      ProgressGameMusic: {
        where: {
          userId: user.user.id,
        },
        select: {
          percentage: true,
        },
      },
    },
  });

  if (!data) {
    return null;
  }

  // Normalizando dados de progresso do usuário, se disponível
  const userProgress = data.ProgressGameMusic[0] || { percentage: 0 };
  const completed = userProgress.percentage >= 100;

  return {
    title: data.title,
    artist: data.artist,
    youtubeLink: data.youtubeLink,
    tabs: data.tabs,
    coverAlbum: data.coverAlbum,
    tuning: data.tuning,
    timeMinutes: data.timeMinutes,
    timeSeconds: data.timeSeconds,
    targetCompare: data.audioCompareId,
    userProgress: {
      percentage: userProgress.percentage,
      completed,
    },
  };
});

export const getSimilarMusics = async (musicId: number | string) => {
  try {
    // Converte para número, se musicId for uma string
    const parsedMusicId = typeof musicId === "string" ? parseInt(musicId, 10) : musicId;

    if (isNaN(parsedMusicId)) {
      throw new Error("ID inválido. Certifique-se de que o ID é um número.");
    }

    // Obtem a música pelo ID
    const music = await db.music.findUnique({
      where: { id: parsedMusicId },
      select: {
        title: true,
        artist: true,
      },
    });

    if (!music) {
      throw new Error("Música não encontrada.");
    }

    // Primeiro tenta buscar músicas similares
    let similarMusics = await db.music.findMany({
      where: {
        id: { not: parsedMusicId },
        OR: [
          {
            title: {
              contains: music.title,
              mode: "insensitive",
            },
          },
          {
            artist: {
              equals: music.artist,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "asc",
      },
      select: {
        id: true,
        title: true,
        artist: true,
        coverAlbum: true,
        ProgressGameMusic: {
          select: {
            percentage: true,
          },
        },
      },
      take: 3,
    });

    // Se não houver músicas similares, buscar músicas recomendadas sem agregação
    if (similarMusics.length === 0) {
      similarMusics = await db.music.findMany({
        where: {
          id: { not: parsedMusicId },
        },
        orderBy: {
          createdAt: "desc", // Ordena pela data de criação como alternativa
        },
        select: {
          id: true,
          title: true,
          artist: true,
          coverAlbum: true,
          ProgressGameMusic: {
            select: {
              percentage: true,
            },
          },
        },
        take: 3,
      });
    }

    return similarMusics;
  } catch (error) {
    console.error("Erro ao buscar músicas:", error);
    throw error;
  }
};
