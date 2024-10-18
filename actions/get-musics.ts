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
