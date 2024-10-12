"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const postProgressCourse = async (
  userId: string,
  courseId: string,
): Promise<number> => {
  try {
    const user = await auth();
    const publishedChapters = await db.chapter.findMany({
      where: {
        isPublished: true,
      },
      select: {
        id: true,
      },
    });

    const publishedChaptersIds = publishedChapters.map((chapter) => chapter.id);

    const validCompletedChapters = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: publishedChaptersIds,
        },
        isCompleted: true,
      },
    });

    // Calcular a porcentagem de progresso
    const progressPercentage =
      (validCompletedChapters / publishedChaptersIds.length) * 100;

    // Salvar o progresso na tabela ProgressCourseModule
    await db.progressCourseModule.upsert({
      where: {
        userId_courseId: {
          userId: user?.user.id!,
          courseId: courseId,
        },
      },
      update: {
        points: progressPercentage,
        progressStatus: validCompletedChapters === publishedChaptersIds.length
          ? "completed"
          : "in_progress",
        updatedAt: new Date(),
      },
      create: {
        userId: userId!,
        courseId: courseId,
        userName: user?.user.name || "Name", // Você pode substituir por um nome real
        userImageSrc: user?.user.image || "TODO: svg", // Você pode substituir por um URL real
        points: progressPercentage,
        progressStatus: validCompletedChapters === publishedChaptersIds.length
          ? "completed"
          : "in_progress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    
    return progressPercentage;
  } catch (error) {
    console.log("[GET_PROGRESS]", error);
    return 0;
  }
};

export const getUserPercentageCourse = async (
  userId: string,
): Promise<number> => {
  try {
  const getUserPercentage = await db.progressCourseModule.findFirst({
    where: {
      userId: userId,
    },
    select: {
      points: true,
    }
  })
  return getUserPercentage?.points || 0;
} catch (error) {
  console.log("[GET_PERCENTAGE]", error);
  return 0;
}
};
