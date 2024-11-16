"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { checkAndUpdateFrequency } from "./set-frequency";
import { randomUUID } from "crypto";

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
    checkAndUpdateFrequency(userId)
    const validCompletedChapters = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: publishedChaptersIds,
        },
        isCompleted: true,
      },
    });

    const progressPercentage =
      (validCompletedChapters / publishedChaptersIds.length) * 100;

    // Buscar o registro atual para capturar a última porcentagem
    const existingProgress = await db.progressCourseModule.findUnique({
      where: {
        userId_courseId: {
          userId: userId,
          courseId: courseId,
        },
      },
      select: {
        percentage: true,
      },
    });

    // Se o registro existir, salvar a última porcentagem, senão definir como 0
    const lastPercentageWin = existingProgress?.percentage || 0;
    
    // Salvar o progresso na tabela ProgressCourseModule
    await db.progressCourseModule.upsert({
      where: {
        userId_courseId: {
          userId: user?.user.id!,
          courseId: courseId,
        },
      },
      update: {
        lastPercentageWin: lastPercentageWin, // Salvando a última porcentagem
        points: +10,
        userImageSrc: user?.user.image || "TODO.svg",
        percentage: progressPercentage,
        progressStatus: validCompletedChapters === publishedChaptersIds.length
          ? "completed"
          : "in_progress",
        updatedAt: new Date(),
      },
      create: {
        lastPercentageWin: lastPercentageWin, // Salvando a última porcentagem ao criar
        userId: userId!,
        courseId: courseId,
        userName: user?.user.name || `user${randomUUID}`, // Você pode substituir por um nome real
        userImageSrc: user?.user.image || "TODO.sgv", // Você pode substituir por um URL real
        percentage: progressPercentage,
        points: + 10,
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
): Promise<{ points: number, percentage: number, lastPercentageWin: number }> => {
  try {
    const getUserPercentage = await db.progressCourseModule.findFirst({
      where: {
        userId: userId,
      },
      select: {
        points: true,
        percentage: true,
        lastPercentageWin: true,
      },
    });

    return {
      points: getUserPercentage?.points || 0,
      percentage: getUserPercentage?.percentage || 0,
      lastPercentageWin: getUserPercentage?.lastPercentageWin || 0,
    };
  } catch (error) {
    console.log("[GET_PERCENTAGE]", error);
    return {
      points: 0,
      percentage: 0,
      lastPercentageWin: 0,
    };
  }
};
