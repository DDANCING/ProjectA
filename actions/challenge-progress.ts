"use server";
import { auth } from "@/auth";
import { getActivitiesUserProgress } from "./get-userProgress";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getUserSubscription } from "./get-user-subscription";

export const upsertChallengeProgress = async (challengeId: number) => {
  const user = await auth();

  if (!user?.user.id) {
    throw new Error('User is not authenticated');
  }

  const currentUserProgress = await getActivitiesUserProgress();

  if (!currentUserProgress) {
    throw new Error('User progress not found');
  }

  const challenge = await db.challenge.findFirst({
    where: {
      id: challengeId,
    },
  });

  if (!challenge) {
    throw new Error('Challenge not found');
  }

  const lessonId = challenge.lessonId;

  const existingChallengeProgress = await db.challengeProgress.findFirst({
    where: {
      userId: user.user.id,
      challengeId: challengeId,
    },
  });

  const isPractice = !!existingChallengeProgress;
  const userSubscription = await getUserSubscription();

  if (currentUserProgress.hearts === 0 && !isPractice && !userSubscription?.isActive) {
    return { error: "hearts" };
  }

  if (isPractice) {
    await db.challengeProgress.update({
      where: {
        id: existingChallengeProgress.id,
      },
      data: {
        completed: true,
      },
    });

    await db.userProgressExerciseModule.update({
      where: {
        userId: user.user.id,
      },
      data: {
        hearts: Math.min(currentUserProgress.hearts + 1, 5),
        points: currentUserProgress.points + 10,
      },
    });

    revalidatePath("/activities/learn");
    revalidatePath("/activities/lesson");
    revalidatePath("/activities/quests");
    revalidatePath("/activities/leaderboard");
    revalidatePath(`/activities/lesson/${lessonId}`);
    return;
  }

  await db.challengeProgress.create({
    data: {
      challengeId: challengeId,
      userId: user.user.id,
      completed: true,
    },
  });
  
  await db.userProgressExerciseModule.update({
    where: {
      userId: user.user.id,
    },
    data: {
      points: currentUserProgress.points + 10,
    },
  });

  const allChallenge = await db.challenge.findMany({
    select: {
      id: true,
    }
  });

  const completedChallenge = await db.challenge.findMany({
    where: {
      challengeProgress: {
        some: {
          userId: user.user.id,
        }
      }
    }
  });

  const challengePercentage = (completedChallenge.length / allChallenge.length) * 100;

  // Buscar a última porcentagem antes de atualizar
  const userProgress = await db.userProgressExerciseModule.findFirst({
    where: {
      userId: user.user.id,
    },
    select: {
      lastPercentageWin: true,  // Obter a última porcentagem
    }
  });

  const lastPercentageWin = userProgress?.lastPercentageWin || 0; // Define 0 se não existir

  // Atualizar o progresso do módulo de exercício do usuário
  await db.userProgressExerciseModule.update({
    where: {
      userId: user.user.id,
    },
    data: {
      lastPercentageWin: lastPercentageWin, // Salva a última porcentagem antes de atualizar
      percentage: challengePercentage,
    }
  });

  revalidatePath("/activities/learn");
  revalidatePath("/activities/lesson");
  revalidatePath("/activities/quests");
  revalidatePath("/activities/leaderboard");
  revalidatePath(`/activities/lesson/${lessonId}`);
};
