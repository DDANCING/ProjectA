import { useCurrentUser } from "@/data/hooks/use-current-user";
import { cache } from "react";
import { getUserProgress } from "./get-userProgress";
import { db } from "@/lib/db";

export const getExerciseProgress =  cache(async () =>{
  const user = useCurrentUser();
  const userProgress = await getUserProgress();

  if (!user?.id || !userProgress?.activeExerciseId){
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
            where: {
              challengeProgress: {
                some: { 
                  userId: user.id,
                },
              },
            },
            include: {  
              challengeProgress: true,
            },
          },
        },
      },
    },
  });
  
  const firstUncompletedLesson = unitsInActiveExercise
    .flatMap((unit) => unit.lessons)
    .find((lesson) => {
      return lesson.challenges.some((challenge) => {
        return !challenge.challengeProgress || challenge.challengeProgress.length === 0 || challenge.challengeProgress.some((progress) => progress.completed === false)
      });
    });
    return {
      activeLesson: firstUncompletedLesson,
      activeLessonId: firstUncompletedLesson?.id,
    };
  });

 