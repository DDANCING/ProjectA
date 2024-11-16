"use server"
import { db } from "@/lib/db";
import { getUserPercentageCourse } from "./course-progress";
import { getProgressMusic } from "./game-progress";
import { getProgressActivities } from "./get-userProgress";
import { checkAndUpdateFrequency } from "./set-frequency";
import { auth } from "@/auth";
import { randomUUID } from "crypto";


export const getUserPercentageAverage = async (
  userId: string
): Promise<{ percentage: number }> => {
  try {
    const UserPercentageCourseData = getUserPercentageCourse(userId);
    const UserPercentageMusicData = getProgressMusic(userId);
    const UserPercentageActivitiesData = getProgressActivities(userId);

    const [
      UserMusicPercentage,
      UserActivitiesPercentage,
      UserPercentageCourse,
    ] = await Promise.all([
      UserPercentageMusicData,
      UserPercentageActivitiesData,
      UserPercentageCourseData,
    ]);

    const MusicPercentage = UserMusicPercentage.totalPercentage || 0;
    const ActivitiesPercentage = UserActivitiesPercentage.totalPercentage || 0;
    const CoursePercentage = UserPercentageCourse.percentage || 0;

    const average =
      (MusicPercentage + ActivitiesPercentage + CoursePercentage) / 3;

    await checkAndUpdateFrequency(userId);

    const totalAverage = await db.userOverallProgress.findUnique({
      where: { userId },
    });

    if (!totalAverage) {
      await db.userOverallProgress.create({
        data: {
          userId,
          averagePercentage: average,
          exercisePercentage: ActivitiesPercentage,
          gameMusicPercentage: MusicPercentage,
          videoPercentage: CoursePercentage,
        },
      });
    } else {
      await db.userOverallProgress.update({
        where: { userId },
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
  userId: string
): Promise<{ points: number }> => {
  try {
    const user = await auth();
    const UserPointsCourseData = getUserPercentageCourse(userId);
    const UserPointsMusicData = getProgressMusic(userId);
    const UserPointsActivitiesData = getProgressActivities(userId);

    const [
      UserMusicPoints,
      UserActivitiesPoints,
      UserPointsCourse,
    ] = await Promise.all([
      UserPointsMusicData,
      UserPointsActivitiesData,
      UserPointsCourseData,
    ]);

    const MusicPoints = UserMusicPoints.points || 0;
    const ActivitiesPoints = UserActivitiesPoints.points || 0;
    const CoursePoints = UserPointsCourse.points || 0;

    const averagePoints = Number(
      ((MusicPoints + ActivitiesPoints + CoursePoints) / 3).toFixed(1)
    );

    await checkAndUpdateFrequency(userId);

    const totalAverage = await db.userOverallProgress.findUnique({
      where: { userId },
    });

    if (!totalAverage) {
      await db.userOverallProgress.create({
        data: {
          userId,
          averagePoints: averagePoints,
          exercisePoints: ActivitiesPoints,
          gameMusicPoints: MusicPoints,
          videoPoints: CoursePoints,
          userName: user?.user.name || `user${randomUUID()}`,
          userImageSrc: user?.user.image || "TODO.svg",
        },
      });
    } else {
      await db.userOverallProgress.update({
        where: { userId },
        data: {
          averagePoints: averagePoints,
          exercisePoints: ActivitiesPoints,
          gameMusicPoints: MusicPoints,
          videoPoints: CoursePoints,
          userName: user?.user.name || `user${randomUUID()}`,
          userImageSrc: user?.user.image || "TODO.svg",
        },
      });
    }

    return { points: averagePoints };
  } catch (error) {
    console.error("[POST_POINTS_AVERAGE]", error);
    throw new Error("Error calculating average user points");
  }
};