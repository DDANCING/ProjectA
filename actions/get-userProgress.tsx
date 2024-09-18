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
      activeExercise: true,  // Inclui a atividade ativa
    },
  });

  // Retorna o id da atividade ativa
  return data;
});
