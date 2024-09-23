"use server"
import { cache } from "react";
import { db } from "@/lib/db";
import { getUserProgress } from "./get-userProgress";
import { useUser } from "@/data/hooks/use-current-auth";

export const getUnits = cache(async () => {
  const user = await useUser();
  

  const userProgress = await getUserProgress();


  if (!user.userId || !userProgress?.activeExerciseId) {
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
              challengeProgress: {
                where: {
                  userId: user.userId,
                }
              },
            },
          },
        },
      },
    },
  });
  

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
