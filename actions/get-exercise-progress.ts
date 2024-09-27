"use server"

import { cache } from "react";
import { getUserProgress } from "./get-userProgress";
import { db } from "@/lib/db";
import { auth } from "@/auth";

export const getExerciseProgress = cache(async () => {
  const user = await auth();
  

  const userProgress = await getUserProgress();
  

  if (!user?.user.id || !userProgress?.activeExerciseId) {
    
    return null;
  }

  const unitsInActiveExercise = await db.unit.findMany({
    orderBy: {
      order: "asc",
    },
    where: {
      exerciseModuleId: userProgress.activeExerciseId,
    },
    include: {
      lessons: {
        orderBy: {
          order: "asc",
        },
        include: {
          unit: true,
          challenges: {
            // Remover o filtro para garantir que todos os desafios sejam incluídos
            include: {  
              challengeProgress: true,
            },
          },
        },
      },
    },
  });
  
  

  unitsInActiveExercise.forEach((unit) => {
    unit.lessons.forEach((lesson) => {
      lesson.challenges.forEach((challenge) => {
      });
    });
  });

  const firstUncompletedLesson = unitsInActiveExercise
    .flatMap((unit) => unit.lessons)
    .find((lesson) => {
      return lesson.challenges.some((challenge) => {
        return (
          !challenge.challengeProgress || 
          challenge.challengeProgress.length === 0 || 
          challenge.challengeProgress.some((progress) => progress.completed === false)
        );
      });
    });


  return {
    activeLesson: firstUncompletedLesson,
    activeLessonId: firstUncompletedLesson?.id,
  };
});
