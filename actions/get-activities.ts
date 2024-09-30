"use server";
import { cache } from "react";
import { db } from "@/lib/db";
import { ExerciseModule } from "@prisma/client";



export const getActivities = cache(async () => {
  
  const data = await db.exerciseModule.findMany();

  return data;
});

export const getActivitiesById = cache(async (exerciseModuleId: number) => {
  const data = await db.exerciseModule.findFirst({
    where: {
      id: exerciseModuleId,
    },
  });
  return data;
});
     