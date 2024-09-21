"use server"
import { cache } from "react";
import { db } from "@/lib/db";
import { getUserProgress } from "./get-userProgress";

export const getUnits = cache(async () => {
  const userProgress = await getUserProgress();


  if (!userProgress?.activeExerciseId) {
    return [];
  }

  
  const data = await db.unit.findMany({
    where: {
      exerciseModuleId: userProgress.activeExerciseId,  
    },
    include: {
      lessons: {
        include: {
          challenges: true,  
        },
      },
    },
  });

  return data;
});
