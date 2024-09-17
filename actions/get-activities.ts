import { cache } from "react";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";


export const getActivities = cache(async () => {
 
    const user = await currentUser();
    if (!user?.id) {
      return null;
    }
      const data = await db.userProgressExerciseModule.findFirst({
        where: {
          userId: user.id,
        },
        include: {
         ExerciseModule : true,
        },
      });
    
      return data;

});
     