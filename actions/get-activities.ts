import { cache } from "react";
import { db } from "@/lib/db";



export const getActivities = cache(async () => {

  const data = await db.exerciseModule.findMany();

  return data;
});
     