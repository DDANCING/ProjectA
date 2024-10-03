"use server"

import { cache } from "react"; 
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { getActivitiesById } from "./get-activities";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { error } from "console";



export const getUserProgress = cache(async () => {
  const user = await auth();

  if (!user?.user.id) {
    return null;
  }

  const data = await db.userProgressExerciseModule.findFirst({
    where: {
      userId: user.user.id,
    },
    include: {
      activeExercise: true,  // Inclui a atividade ativa
    },
  });

  // Retorna o id da atividade ativa
  return data;
});

export const upsertUserProgress = async (activitieId: number) => {
  const user = await currentUser();

  if (!user?.id || !user) {
    throw new Error("Unauthorized");
  }

  const  activitie = await getActivitiesById(activitieId);

  if (!activitie) {
    throw new Error("Activity not found");
  }
  

 // if (!activitie.units.length || !activitie.units[0].lessons.length) {
  //  throw new Error("Activity is empty");
  //}

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.userProgressExerciseModule.update({
      where: {
        userId: user.id,  
      },
      data: {
        activeExerciseId: activitieId,
        activeExercise: { connect: { id: activitieId } },
        userName: user?.name ?? '',
        userImageSrc: user.image || "TODO:svg",
        
      },
    });
    revalidatePath("/activities");
    revalidatePath("/activities/learn");
    redirect("/activities/learn")
  }
  await db.userProgressExerciseModule.create({
    data: {
      userId: user.id,
      activeExerciseId: activitieId,
      activeExercise: { connect: { id: activitieId } },
      userName: user?.name ?? '',
      userImageSrc: user.image || "TODO:svg",
    },
  });
  revalidatePath("/activities");
  revalidatePath("/activities/learn");
  redirect("/activities/learn")
}

export const reduceHearts = async (challengeId: number) => {
  const user = await auth();

  if (!user?.user.id) {
    throw new Error("Unauthorized");
  }

  const currentUserProgress = await getUserProgress();

  const challenge = await db.challenge.findFirst({
    where: {
      id: challengeId,
    },
  });

  if (!challenge) {
    throw new Error("Challenge not found");
  }

  
  const existingChallengeProgress = await db.challengeProgress.findFirst({
    where: {
      challengeId: challengeId,
      userId: user.user.id,
    },
  });

  const isPratice = !!existingChallengeProgress;

  if(isPratice) {
    return { error: "pratice" };
  }

  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }
  const lessonId = challenge.lessonId;

  if (currentUserProgress.hearts === 0) {
    return { error: "hearts" };
  }

  await db.userProgressExerciseModule.update({
    where: {
     userId: user.user.id
   },
   data: {
     hearts: Math.max(currentUserProgress.hearts - 1, 0),
     points: currentUserProgress.points + 10,
   },
 });

 revalidatePath("/activities");
 revalidatePath("/activities/learn");
 revalidatePath("/activities/shop");
 revalidatePath("/activities/quests");
 revalidatePath("/activities/leaderboard");
 revalidatePath(`/activities/lesson/${lessonId}`);

};