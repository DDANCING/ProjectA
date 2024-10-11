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