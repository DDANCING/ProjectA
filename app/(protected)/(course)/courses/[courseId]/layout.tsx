import { getProgess } from "@/actions/get-progress";
import { CourseMobileSidebar } from "@/app/(protected)/_components/course/courses/course-mobile-sidebar";
import { CourseSidebar } from "@/app/(protected)/_components/course/courses/course-sidebar";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";



const CourseLayout =  async ({
   children, params
   }: { 
    children: React.ReactNode,
    params: { courseId: string }
  }) => {
  const user = await auth();  
  
  if (!user?.user.id) {
    return redirect("/dashboard")
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId: user.user.id,
            }
          }
        },
        orderBy: {
          position: "asc"
        }
      },
    },
  });

 if (!course) {
  return redirect ("/dashboard");
 }

 const progressCount = await getProgess(user.user.id, course.id);

  return(
    <div className="flex flex-col h-screen bg-background">
      <div className=" p-6 ">
      <CourseMobileSidebar 
      course={course}
      progressCount={progressCount}
      /> 
      </div>
      <main className=" flex gap-4 rounded-sm h-full w-full justify-between ">
      <div className="hidden md:flex flex-col justify-between gap-4">
        <div className="w-60 flex-1 isolate aspect-video  bg-primary/20 shadow-lg ring-1 ring-black/5">
         <CourseSidebar
         course={course}
         progressCount={progressCount}
         />
        </div>
        <div className="w-60 isolate aspect-video  bg-primary/20 shadow-lg ring-1 ring-black/5 h-36 p-2"></div>
      </div>
      <div className="flex-1 pr-2">
          {children}
          
      </div>
      
    </main>
    </div>
  );
}

export default CourseLayout;