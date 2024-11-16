"use server";

import { db } from "@/lib/db";
import dayjs from "dayjs";

export const checkAndUpdateFrequency = async (userId: string) => {
  try {
    console.log("Verificando progresso para o usuário:", userId);

    let userProgress = await db.userOverallProgress.findUnique({
      where: {
        userId: userId,
      },
      select: {
        updateFrequency: true,
        frequency: true,
      },
    });

    if (!userProgress) {
      console.log("Nenhum progresso encontrado, criando registro inicial...");
      userProgress = await db.userOverallProgress.create({
        data: {
          userId,
          frequency: 1,
          updateFrequency: new Date(),
        },
      });
      return;
    }

    const lastUpdated = dayjs(userProgress.updateFrequency);
    const now = dayjs();
    const hoursSinceUpdate = now.diff(lastUpdated, "hour");

    if (hoursSinceUpdate > 48) {
      console.log("Mais de 48 horas desde a última atualização, reiniciando frequência.");
      await db.userOverallProgress.update({
        where: { userId: userId },
        data: {
          frequency: 1,
          updateFrequency: now.toDate(),
        },
      });
    } else if (hoursSinceUpdate >= 24 && hoursSinceUpdate <= 48) {
      console.log("Entre 24 e 48 horas desde a última atualização, incrementando frequência.");
      await db.userOverallProgress.update({
        where: { userId: userId },
        data: {
          frequency: userProgress.frequency + 1,
          updateFrequency: now.toDate(),
        },
      });
    }
  } catch (error) {
    console.error("[CHECK_FREQUENCY]: Erro ao verificar ou atualizar frequência:", error);
    throw new Error("Error checking user frequency");
  }
};

export const getUserFrequency = async (userId: string): Promise<number> => {
  try {
    console.log("Obtendo frequência do usuário:", userId);

    const userProgress = await db.userOverallProgress.findUnique({
      where: {
        userId: userId,
      },
      select: {
        frequency: true,
      },
    });

    if (!userProgress) {
      console.log("Nenhum progresso encontrado para o usuário, retornando frequência inicial (0).");
      return 0;
    }

    return userProgress.frequency;
  } catch (error) {
    console.error("[CHECK_FREQUENCY]: Detalhes do erro:", error);
    throw new Error("Error checking user frequency");
  }
};
