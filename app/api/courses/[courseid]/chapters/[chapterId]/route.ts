import { useUserId } from "@/data/hooks/use-current-id";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string }}
) {
  try {
    const userId = await useUserId(req);
    const { ...values } = await req.json();
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    
    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId
      }
    });

    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Verifica se o capítulo existe
    const existingChapter = await db.chapter.findUnique({
      where: { id: params.chapterId },
    });

    if (!existingChapter) {
      return new NextResponse("Chapter not found", { status: 404 });
    }

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId, // Corrigido aqui
      },
      data: {
        ...values,
      }
    });

    // TODO: HANDLE VIDEO UPLOAD

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[COURSES_CHAPTER_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
