"use server"

import { cache } from "react";
import { db } from "@/lib/db";
import { getUserProgress } from "./get-userProgress";
import { auth } from "@/auth"; // Ou qualquer outro mecanismo de autenticação

export const getUnits = cache(async () => {
  const user = await auth(); // Utilize sua função de autenticação aqui
  const userId = user?.user?.id; 

  const userProgress = await getUserProgress();

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
        include: {
          challenges: {
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
