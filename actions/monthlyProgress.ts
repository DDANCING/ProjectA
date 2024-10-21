"use server";

import { db } from "@/lib/db";
import { getUserPercentageCourse } from "./course-progress";
import { getProgressMusic } from "./game-progress";
import { getProgressActivities } from "./get-userProgress";
import dayjs from "dayjs";

export const calculateAndStoreMonthlyProgress = async (
  userId: string,
): Promise<any[]> => {
  try {
    // Obtém os dados de progresso do usuário
    const UserPercentageCourseData = getUserPercentageCourse(userId);
    const UserPercentageMusicData = getProgressMusic(userId);
    const UserPercentageActivitiesData = getProgressActivities(userId);

    // Aguarda a resposta de todas as promessas
    const [
      UserMusicPercentage,
      UserActivitiesPercentage,
      UserPercentageCourse,
    ] = await Promise.all([
      UserPercentageMusicData,
      UserPercentageActivitiesData,
      UserPercentageCourseData,
    ]);

   

    // Calcula as porcentagens de progresso para cada categoria
    const MusicPercentage = UserMusicPercentage.totalPercentage || 0;
    const ActivitiesPercentage = UserActivitiesPercentage.totalPercentage || 0;
    const CoursePercentage = UserPercentageCourse.percentage || 0;

    // Calcula a média das porcentagens
    const average = (MusicPercentage + ActivitiesPercentage + CoursePercentage) / 3;

    // Verifica se já existe um registro de progresso mensal para o mês atual
    const currentMonth = dayjs().month() + 1; // +1 pois o mês é zero-indexed
    const currentYear = dayjs().year();

    const existingMonthlyProgress = await db.monthlyProgress.findUnique({
      where: {
        userId_month_year: {
          userId,
          month: currentMonth,
          year: currentYear,
        },
      },
    });

    
    if (!existingMonthlyProgress) {
      console.log("Creating monthly progress...");
      await db.monthlyProgress.create({
        data: {
          userId,
          month: currentMonth,
          year: currentYear,
          averagePoints: average,
          exercisePoints: ActivitiesPercentage,
          gameMusicPoints: MusicPercentage,
          videoPoints: CoursePercentage,
        },
      });
     
    } else {
      
    }

    
    const monthlyProgress = await db.monthlyProgress.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "asc",
      },
      take: 12,
      select: {
        averagePoints: true,
        exercisePoints: true,
        videoPoints: true,
        gameMusicPoints: true,
        month: true,
      },
    });

    return monthlyProgress; 

  } catch (error) {
    console.error("[CALCULATE_MONTHLY_PROGRESS]", error);
    throw new Error("Error calculating and storing monthly progress");
  }
};
