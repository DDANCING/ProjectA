"use server"
import { db } from "@/lib/db";
import { getUserPercentageCourse } from "./course-progress";
import { getProgressMusic } from "./game-progress";
import { getProgressActivities } from "./get-userProgress";
import dayjs from "dayjs";
import { calculateAndStoreMonthlyProgress } from "./monthlyProgress";
import { checkAndUpdateFrequency } from "./set-frequency";

export const getUserPercentageAverage = async (
  userId: string,
): Promise<{ percentage: number }> => {
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

    // Verifica se o registro de progresso total já existe no banco de dados
    const totalAverage = await db.userOverallProgress.findUnique({
      where: {
        userId: userId,
      },
      select: {
        createdAt: true, // Seleciona a data de criação para verificar se passou 30 dias
      },
    });

   
    if (!totalAverage?.createdAt) {
      checkAndUpdateFrequency(userId)
      await db.userOverallProgress.create({
        data: {
          userId: userId,
          averagePoints: average,
          exercisePoints: ActivitiesPercentage,
          gameMusicPoints: MusicPercentage,
          videoPoints: CoursePercentage,
        },
      });
    } else {
      await db.userOverallProgress.update({
        where: {
          userId: userId,
        },
        data: {
          averagePoints: average,
          exercisePoints: ActivitiesPercentage,
          gameMusicPoints: MusicPercentage,
          videoPoints: CoursePercentage,
        },
      });
    }

    // Salva o progresso mensal se já se passaram 30 dias desde o último salvamento
    if (totalAverage) {
      const thirtyDaysAgo = dayjs(totalAverage.createdAt).add(30, 'day');
      if (dayjs().isAfter(thirtyDaysAgo)) {
        const currentMonth = dayjs().month() + 1; // +1 pois o mês é zero-indexed
        const currentYear = dayjs().year();

        // Enviar dados para a API
        await fetch("/api/monthlyProgress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            month: currentMonth,
            year: currentYear,
            averagePoints: average,
            exercisePoints: ActivitiesPercentage,
            gameMusicPoints: MusicPercentage,
            videoPoints: CoursePercentage,
          }),
        });
      }
    }

    calculateAndStoreMonthlyProgress(userId);
    
    return { percentage: average };

  } catch (error) {
    console.error("[POST_AVERAGE]", error);
    throw new Error("Error calculating average user progress");
  }
};
