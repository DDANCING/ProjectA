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
    userProgress: {
      percentage: userProgress.percentage,
      completed,
    },
  };
});
