"use server";

import { db } from "@/lib/db"; // Certifique-se que você tem uma instância conectada do seu Prisma client



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