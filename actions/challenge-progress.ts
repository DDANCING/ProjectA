"use server";

import { auth } from "@/auth";
import { getUserProgress } from "./get-userProgress";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const upsertChallengeProgress = async (challengeId: number) => {
  const user = await auth();

  if (!user?.user.id) {
    throw new Error('User is not authenticated');
  }

  const currentUserProgress = await getUserProgress();

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

  if (currentUserProgress.hearts === 0 && !isPractice) {
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
        userId: user.user.id
      },
      data: {
        hearts: Math.min(currentUserProgress.hearts + 1, 5),
        points: currentUserProgress.points + 10,
      },
    });

    revalidatePath("/learn");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
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

  revalidatePath("/learn");
  revalidatePath("/lesson");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath(`/lesson/${lessonId}`);
};