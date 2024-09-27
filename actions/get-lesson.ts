"use server"

import { cache } from "react";
import { getExerciseProgress } from "./get-exercise-progress";
import { db } from "@/lib/db";
import { auth } from "@/auth";


export const getLesson = cache(async (id?: number) => {
  const user = await auth();
  const exerciseProgress = await getExerciseProgress();

  const lessonId = id || exerciseProgress?.activeLessonId;
  
  if(!user?.user.id) {
    return null;
  }
  if(!lessonId) {
    return null;
  }

  const data = await db.lesson.findFirst({
    where: {
      id: lessonId,
    },
    include: {
      challenges: {
        orderBy: {
          order: 'asc',
        },
        include: {
          challengeOptions: true,
          challengeProgress: {
            where: {
              userId: user?.user.id,
            },
          },
        },
      },
    },
  });
  
  if (!data || !data.challenges) {
    return null;
  }

  const normalizedChallenges = data.challenges.map((challenge) => {
    const completed = challenge.challengeProgress && challenge.challengeProgress.length > 0 && challenge.challengeProgress.every((progress) => progress.completed)

    return { ...challenge, completed };
  });
  
  return { ...data, challenges: normalizedChallenges};
});

export const getLessonPercentage = cache(async () => {
  const exerciseProgress = await getExerciseProgress();
 
  if (!exerciseProgress?.activeLessonId) {
    return 0;
  }

  const lesson = await getLesson(exerciseProgress.activeLessonId);
  

  if (!lesson) {
    return 0;
  }

  const completedChallenges = lesson.challenges
    .filter((challenge) => challenge.completed);
  

  const percentage = Math.round(
    (completedChallenges.length / lesson.challenges.length) * 100,
  );
  

  return percentage;
});

export const getActiveLesson = cache(async () => {
  const exerciseProgress = await getExerciseProgress();
  

  const activeLesson = await db.lesson.findFirst({
    where: { id: exerciseProgress?.activeLessonId },
    include: {
      unit: true 
    },
  });
  

  return activeLesson;
});