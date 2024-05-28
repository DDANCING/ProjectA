"use server"

import { useUserId } from "@/data/hooks/use-current-id";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
 { params }: { params: { courseId: string }}
) {
  try{
    const userId = await useUserId(req);
    const { url } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401
      });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });
    
   if (!courseOwner) {
    return new NextResponse("Unauthorized", { status: 401 })
   }

   const activitie = await db.activitie.create({
     data: {
      url,
      name: url.split("/").pop(),
      courseId: params.courseId,
     }
   });

   return NextResponse.json(activitie);

  } catch(error) {
     console.log("COURSE_ID_ACTIVITIES", error);
     return new NextResponse("Internal Error", { status: 500 });
  }
}
