"use server"

import { db } from "@/lib/db";
import dayjs from "dayjs";

export const checkAndUpdateFrequency = async (userId: string) => {
  try {
    
    const userProgress = await db.userOverallProgress.findUnique({
      where: {
        userId: userId,
      },
      select: {
        updateFrequency: true,
        frequency: true,
      },
    });

    if (!userProgress) {
      throw new Error("User progress not found");
    }

    const lastUpdated = dayjs(userProgress.updateFrequency);
    const now = dayjs();
    const hoursSinceUpdate = now.diff(lastUpdated, 'hour');

    if (hoursSinceUpdate > 48) {
      console.log("more 48")
      await db.userOverallProgress.update({
        where: {
          userId: userId,
        },
        data: {
          frequency: 0,
          updateFrequency: now.toDate(), // Atualiza `updateFrequency`
        },
      });
    } else if (hoursSinceUpdate >= 24 && hoursSinceUpdate <= 48) {
     console.log("less 48 more 24")
      await db.userOverallProgress.update({
        where: {
          userId: userId,
        },
        data: {
          frequency: userProgress.frequency + 1,
          updateFrequency: now.toDate(), // Atualiza `updateFrequency`
        },
      });
    }
  } catch (error) {
    console.error("[CHECK_FREQUENCY]", error);
    throw new Error("Error checking user frequency");
  }
};


export const getUserFrequency = async (userId: string): Promise<number> => {
  try {
    const userProgress = await db.userOverallProgress.findUnique({
      where: {
        userId: userId,
      },
      select: {
        frequency: true,
      },
    });

    if (!userProgress) {
      
      return 0; // Default to 0 if no progress is found
    }

    
    return userProgress.frequency;
  } catch (error) {
    console.error("[CHECK_FREQUENCY]: Detalhes do erro:", error);
    throw new Error("Error checking user frequency");
  }
};
