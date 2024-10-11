"use server"

import { cache } from "react";
import { db } from "@/lib/db";
import {  getActivitiesUserProgress } from "./get-userProgress";
import { auth } from "@/auth"; // Ou qualquer outro mecanismo de autenticação

export const getUnits = cache(async () => {
  const user = await auth(); // Utilize sua função de autenticação aqui
  const userId = user?.user?.id; 

  const userProgress = await  getActivitiesUserProgress();

  // Verifique se o usuário e o progresso estão disponíveis
  if (!userId || !userProgress?.activeExerciseId) {
    return [];
  }
  
  // Buscar as unidades e lições associadas ao módulo de exercício ativo
  const data = await db.unit.findMany({
    where: {
      exerciseModuleId: userProgress.exerciseModuleId,  
    },
    include: {
      lessons: {
        orderBy: {
          order: "asc"
        },
        include: {
          challenges: {
            orderBy: {
              order: "asc"
            },
            include: {
              challengeProgress: {
                where: {
                  userId: userId, // Filtrar progresso do usuário
                },
              },
            },
          },
        },
      },
    },
  });

  
  const normalizedData = data.map((unit) => {
    const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
      if (lesson.challenges.length === 0) {
        return { ...lesson, completed: false };
      }
      const allCompletedChallenges = lesson.challenges.every((challenge) => {
        return challenge.challengeProgress
          && challenge.challengeProgress.length > 0
          && challenge.challengeProgress.every((progress) => progress.completed);
      });
      return { ...lesson, completed: allCompletedChallenges };
    });
    return { ...unit, lessons: lessonsWithCompletedStatus };
  });
  
  
  return normalizedData;
});
