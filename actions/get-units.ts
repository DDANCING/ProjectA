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
      exerciseModuleId: userProgress.exerciseModuleId,  
    },
    include: {
      lessons: {
        include: {
          challenges: {
            include: {
              challengeProgress: true,
            },
          },
        },
      },
    },
  });
  
  console.log("Unidades encontradas:", data);

   const normalizedData = data.map((unit) => {
    const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
      const allCompletedChallenges = lesson.challenges.every((challenge) => {
        return challenge.challengeProgress
        && challenge.challengeProgress.length > 0
        && challenge.challengeProgress.every((progress) => progress.completed);
      });
      return {...lesson, completed: allCompletedChallenges };
    })
    return { ...unit, lessons: lessonsWithCompletedStatus};
   });
   return normalizedData;
})
