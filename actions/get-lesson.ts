import { useCurrentUser } from "@/data/hooks/use-current-user";
import { cache } from "react";
import { getExerciseProgress } from "./get-exercise-progress";
import { db } from "@/lib/db";


export const getLesson = cache(async (id?: number) => {
  const user = useCurrentUser();
  const exerciseProgress = await getExerciseProgress();

  const lessonId = id || exerciseProgress?.activeLessonId;
  
  if(!user?.id) {
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
              userId: user?.id,
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

  if(!exerciseProgress?.activeLessonId) {
    return 0;
  }

  const lesson = await getLesson(exerciseProgress.activeLessonId)
})