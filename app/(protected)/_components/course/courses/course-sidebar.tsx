
import { db } from "@/lib/db";
import { Chapter, Course, UserProgress } from "@prisma/client"
import { redirect } from "next/navigation";
import { CourseSidebarItem } from "@/app/(protected)/_components/course/courses/course-sidebar-item";
import { auth } from "@/auth";


interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[]
  };
  progressCount: number;
};

export const CourseSidebar = async ({ 
  course, 
  progressCount,
 }: CourseSidebarProps) => {
  const user = await auth();
 
  if(!user?.user.id) {
    redirect("/dashboard");
  }   

  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId: user.user.id,
        courseId: course.id,
      }
    }
  });

  return (
    <div className="h-full flex-col overflow-y-auto shadow-sm">
      <div className="p-2 flex flex-col ">
        <h1 className="font-bold">
          {course.title}
        </h1>
        {/* check purchase and add progress*/}
      </div>
      <div className="flex flex-col w-full">
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
          key={chapter.id}
          id={chapter.id}
          label={chapter.title}
          isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
          courseId={course.id}
          isLocked={!chapter.isFree && !purchase}
          />
        ))}
      </div>
    </div>
  )
}