"use server"

import { cache } from "react"; 
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { getActivitiesById } from "./get-activities";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { error } from "console";
import { getUserSubscription } from "./get-user-subscription";
import { POINTS_TO_REFILL } from "@/constants";
import { number } from "zod";

export const getGameUserProgress = cache(async () => {
  const user = await auth();
  

  if (!user?.user.id) {
    return null;
  }

  const data = await db.progressGameMusic.findFirst({
    where: {
      userId: user.user.id,
    },
    select: {
      points: true,
    },
  });
  
  return data;
});



export const getCourseUserProgress = cache(async () => {
  const user = await auth();
  

  if (!user?.user.id) {
    return null;
  }

  const data = await db.progressCourseModule.findFirst({
    where: {
      userId: user.user.id,
    },
    select: {
      points: true,
    },
  });
  
  return data;
});


export const getActivitiesUserProgress = cache(async () => {
  const user = await auth();
  

  if (!user?.user.id) {
    return null;
  }

  const data = await db.userProgressExerciseModule.findFirst({
    where: {
      userId: user.user.id,
    },
    include: {
      activeExercise: true, 
    },
  });

  
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
  
  if (!activitie.units.length || !activitie.units[0].lessons.length) {
    throw new Error("Activity has no lessons");
  }

  const existingUserProgress = await getActivitiesUserProgress();
  const userSubscription = await getUserSubscription();

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

  const currentUserProgress = await getActivitiesUserProgress();
  const userSubscription = await getUserSubscription();

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

  if (userSubscription?.isActive) {
    return { error: "subscription" };
  }

  const lessonId = challenge.lessonId;



  if (currentUserProgress?.hearts === 0 && !isPratice) {
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

export const refillHearts = async () => {
  const currentUserProgress = await getActivitiesUserProgress();

  const user = await auth();

  if (!user?.user.id) {
    throw new Error("Unauthorized");
  }

  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }

  if (currentUserProgress.hearts === 5) {
    throw new Error("Hearts are already full");
  }

  if (currentUserProgress.points < POINTS_TO_REFILL) {
    throw new Error("Not enough points to refill hearts");
  }

  await db.userProgressExerciseModule.update({
      where: {
       userId: user.user.id
     },
     data: {
       hearts: 5,
       points: currentUserProgress.points - POINTS_TO_REFILL,
     },
   });
 revalidatePath("/activities");
 revalidatePath("/activities/learn");
 revalidatePath("/activities/shop");
 revalidatePath("/activities/quests");
 revalidatePath("/activities/leaderboard");
}