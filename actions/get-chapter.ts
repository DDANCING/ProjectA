"use server";

import { db } from "@/lib/db";
import { Activitie, Chapter } from "@prisma/client";
import { checkAndUpdateFrequency } from "./set-frequency";

interface GetChapterProps {
  userId: string;
  courseId: string;
  chapterId: string;
};

export const getChapter = async ({
  userId,
  courseId,
  chapterId,
}: GetChapterProps) =>  {
  try {
     const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId: courseId,
        }
      }
     });
     
     const course = await db.course.findUnique({
      where: {
        isPublished: true,
        id: courseId,
      },
      select: {
        price: true,
      }
     });

     const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        isPublished: true,
      }
     });
    
     if(!chapter || !course) {
      throw new Error("Chapter or course not found");
     };

      let muxData = null;
      let activities: Activitie[] = [];
      let nextChapter: Chapter | null = null;

      if (purchase) {
        activities = await db.activitie.findMany({
          where: {
            courseId: courseId,
          }
        });
      }

      if (chapter.isFree || purchase) {
        muxData = await db.muxData.findUnique({
          where: {
            chapterId: chapterId,
          }
        });

        nextChapter = await db.chapter.findFirst({
         where: {
          courseId: courseId,
          isPublished: true,
          position: {
            gt: chapter.position,
          }
         },
         orderBy: {
          position: "asc",
         }
        });
      }

      const userProgress = await db.userProgress.findUnique({
        where: {
          userId_chapterId: {
            userId,
            chapterId,
          }
        }
      });

      return {
        chapter, course, muxData, activities, nextChapter, userProgress, purchase,
      };

  } catch (error) {
    console.log("[GET_CHAPTER]", error);
    return {
      chapter: null,
      course: null,
      muxData: null,
      activities: [],
      nextChapter: null,
      userProgress: null,
      purchase: null,
    }
  }
}