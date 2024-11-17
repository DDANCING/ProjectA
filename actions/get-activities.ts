"use server";
import { cache } from "react";
import { db } from "@/lib/db";
import { ExerciseModule } from "@prisma/client";



export const getActivities = cache(async () => {
  
  const data = await db.exerciseModule.findMany();

  return data;
});

export const getActivitiesById = cache(async (exerciseModuleId: number) => {
  const data = await db.exerciseModule.findFirst({
    where: {
      id: exerciseModuleId,
    },
    include: {
      units: {
        orderBy: {
          order: "asc"
        },
        include: {
          lessons: {
            orderBy: {
              order: "asc"
            }
          }
        }
      }
    }
  });
  return data;
});
     
export const getMusicActivitiesById = cache(async (gameId: number | string) => {
  const id = typeof gameId === "string" ? parseInt(gameId, 10) : gameId;

  if (isNaN(id)) {
    throw new Error(`Invalid gameId: ${gameId}`);
  }

  const data = await db.exerciseModule.findMany({
    where: {
      musicId: id,
    },
  });

  return data;
});