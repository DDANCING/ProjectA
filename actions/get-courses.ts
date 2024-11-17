"use server";
import { Category, Course } from "@prisma/client";

import { getProgess } from "@/actions/get-progress";
import { db } from "@/lib/db";

type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: {id: string} [];
    progress: number | null;
};

type GetCourses = {
  userId: string;
  title?: string;
  categoryId?: string;
};
export const getCourses = async ({
  userId,
  title,
  categoryId
}: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
   try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          }
        },
        purchases: {
          where: {
            userId,
          }
        }
      },
      orderBy: {
        createdAt: "desc",
      }
    });

   const courseWithProgress: CourseWithProgressWithCategory[] = await Promise.all(
    courses.map(async course => {
      if (course.purchases.length === 0) {
        return (
          {
            ...course,
            progress: null,
          }
        )
      }

      const progressPercentage = await getProgess(userId, course.id);

      return{
        ...course,
        progress: progressPercentage,
      };
    })
   );
   return courseWithProgress;

   } catch (error) {
    console.log("[GET_COURSES]", error);
    return [];
   }
}

export const getMusicCourses = async ({
  userId,
  musicId,
}: {
  userId: string;
  musicId: number;
}): Promise<CourseWithProgressWithCategory[]> => {
  try {
    // Buscar cursos vinculados ao musicId
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        musicId, // Filtrar pelo musicId
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          },
        },
        purchases: {
          where: {
            userId, // Verificar compras do usuário
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Calcular progresso para cada curso
    const courseWithProgress: CourseWithProgressWithCategory[] = await Promise.all(
      courses.map(async (course) => {
        if (course.purchases.length === 0) {
          // Caso o usuário não tenha comprado o curso
          return {
            ...course,
            progress: null,
          };
        }

        // Obter progresso do curso
        const progressPercentage = await getProgess(userId, course.id);

        return {
          ...course,
          progress: progressPercentage,
        };
      })
    );

    return courseWithProgress;
  } catch (error) {
    console.error("[GET_MUSIC_COURSES]", error);
    return [];
  }
};
