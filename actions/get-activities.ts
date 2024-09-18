import { cache } from "react";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";


export const getActivities = cache(async () => {

  const data = await db.exerciseModule.findMany();

  return data;
});
     