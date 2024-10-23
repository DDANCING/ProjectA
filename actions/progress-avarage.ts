"use server"
import { db } from "@/lib/db";
import { getUserPercentageCourse } from "./course-progress";
import { getProgressMusic } from "./game-progress";
import { getProgressActivities } from "./get-userProgress";
import { checkAndUpdateFrequency } from "./set-frequency";
import { auth } from "@/auth";


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
          averagePercentage: average,
          exercisePercentage: ActivitiesPercentage,
          gameMusicPercentage: MusicPercentage,
          videoPercentage: CoursePercentage,
        },
      });
    } else {
      await db.userOverallProgress.update({
        where: {
          userId: userId,
        },
        data: {
          averagePercentage: average,
          exercisePercentage: ActivitiesPercentage,
          gameMusicPercentage: MusicPercentage,
          videoPercentage: CoursePercentage,
        },
      });
    }
    
    return { percentage: average };

  } catch (error) {
    console.error("[POST_AVERAGE]", error);
    throw new Error("Error calculating average user progress");
  }
};

export const getUserPointsAverage = async (
  userId: string,
): Promise<{ points: number }> => {
  try {
    const user = await auth();
    const UserPointsCourseData = getUserPercentageCourse(userId);
    const UserPointsMusicData = getProgressMusic(userId);
    const UserPointsActivitiesData = getProgressActivities(userId);

    // Aguarda a resposta de todas as promessas
    const [
      UserMusicPoints,
      UserActivitiesPoints,
      UserPointsCourse,
    ] = await Promise.all([
      UserPointsMusicData,
      UserPointsActivitiesData,
      UserPointsCourseData,
    ]);

    // Calcula os pontos para cada categoria
    const MusicPoints = UserMusicPoints.points || 0;
    const ActivitiesPoints = UserActivitiesPoints.points || 0;
    const CoursePoints = UserPointsCourse.points || 0;

    // Calcula a média dos pontos e arredonda para 1 casa decimal
    const averagePoints = Number(((MusicPoints + ActivitiesPoints + CoursePoints) / 3).toFixed(1));

    // Verifica se o registro de progresso total já existe no banco de dados
    const totalAverage = await db.userOverallProgress.findUnique({
      where: {
        userId: userId,
      },
      select: {
        createdAt: true, 
      },
    });

    if (!totalAverage?.createdAt) {
      // Verifica e atualiza a frequência do usuário
      checkAndUpdateFrequency(userId);
      
      // Cria o registro de progresso com base nos pontos
      await db.userOverallProgress.create({
        data: {
          userId: userId,
          averagePoints: averagePoints,
          exercisePoints: ActivitiesPoints,
          gameMusicPoints: MusicPoints,
          videoPoints: CoursePoints,
          userName: user?.user.name || "Name", 
          userImageSrc: user?.user.image || "TODO: svg", 
        },
      });
    } else {
      // Atualiza o registro existente com os novos pontos
      await db.userOverallProgress.update({
        where: {
          userId: userId,
        },
        data: {
          averagePoints: averagePoints,
          exercisePoints: ActivitiesPoints,
          gameMusicPoints: MusicPoints,
          videoPoints: CoursePoints,
          userName: user?.user.name || "Name", 
          userImageSrc: user?.user.image || "TODO: svg",
        },
      });
    }
    
    return { points: averagePoints };

  } catch (error) {
    console.error("[POST_POINTS_AVERAGE]", error);
    throw new Error("Error calculating average user points");
  }
};