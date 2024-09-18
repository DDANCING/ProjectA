import { cache } from "react"; 
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const getUserProgress = cache(async () => {
  const user = await currentUser();

  if (!user?.id) {
    return null;
  }

  const data = await db.userProgressExerciseModule.findFirst({
    where: {
      userId: user.id,
    },
    include: {
      activeExercise: true, 
    },
  });

  return data;
});