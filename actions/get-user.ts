"use server"
import { db } from "@/lib/db";
import { cache } from "react";

export const getTopHundredUsers = cache(async () => {
  const data = await db.userProgressExerciseModule.findMany({
    orderBy: {
      points: "desc",
    },
    take: 100,
    select: {
      userId: true,
      userName: true,
      userImageSrc: true,
      points: true,
    },
  });

  return data;
});
export const getTopHundredCourseUsers = cache(async () => {
  const data = await db.progressCourseModule.findMany({
    orderBy: {
      points: "desc",
    },
    take: 100,
    select: {
      userId: true,
      userName: true,
      userImageSrc: true,
      points: true,
    },
  });
  return data;
});

export const getTopHundredGameUsers = cache(async () => {
  const data = await db.progressGame.findMany({
    orderBy: {
      points: "desc",
    },
    take: 100,
    select: {
      userId: true,
      userName: true,
      userImageSrc: true,
      points: true,
    },
  });
  return data;
});

export const getTopHundredAverageUsers = cache(async () => {
  const data = await db.userOverallProgress.findMany({
    orderBy: {
      averagePoints: "desc",
    },
    take: 100,
    select: {
      userId: true,
      user: true,
      userName: true,
      userImageSrc: true,
      averagePoints: true,
    },
  });
  return data;
});
