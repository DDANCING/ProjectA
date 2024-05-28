import { useUserId } from "@/data/hooks/use-current-id";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function  DELETE(
  req: Request, 

{ params }: { params: { courseId: string, activitiesId: string } }
) {
  try {
    const userId = await useUserId(req);
    if (!userId) {
      return new NextResponse("Unauthorized ", { status: 401});
    }
    
    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId
      }
    })

    if (!courseOwner) {
      return new NextResponse("Unauthorized", {status: 401 })
    }

    const activitie = await db.activitie.delete({
      where: { 
        courseId: params.courseId,
        id: params.activitiesId,
      }
    })

    return NextResponse.json(activitie);

  } catch (error) {
    console.log("ACTIVITIES_ID", error); 
    return new NextResponse("Internal server error", {status: 500});
  }
}