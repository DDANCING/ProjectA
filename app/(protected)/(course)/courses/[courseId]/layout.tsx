import { getProgess } from "@/actions/get-progress";
import { CourseSidebar } from "@/app/(protected)/_components/course/courses/course-sidebar";
import { CourseSidebarChapters } from "@/app/(protected)/_components/sidebar/course-sidebar";
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
  <div className="flex flex-col h-full bg-background">
    <div className=" inset-y-0 w-full z-50">
      
    </div>
    <main className=" flex gap-4 rounded-sm h-full w-full justify-between ">
    <CourseSidebarChapters>
       <CourseSidebar
       course={course}
       progressCount={progressCount}
       />
      </CourseSidebarChapters>
    
    
    <div className="flex-1 pr-2">
        {children}
        
    </div>
    
  </main>
  </div>
);
}


export default CourseLayout;