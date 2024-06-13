import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { CoursesList } from "../_components/course/courses/courses-list";
import { Card } from "@/components/ui/card";

const dashboardPage = async () => {
  const user = await auth();
  const userId = user?.user.id;


  if (!userId) {
    return redirect("/");
  }

  const {
    completedCourses,
    coursesInProgress,
  } = await getDashboardCourses(userId);

  return ( 
    <main className="p-4 flex gap-4 rounded-sm h-full w-s justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="hidden md:flex flex-col justify-between gap-4">
      <div className="w-60 flex-1 bg-background/30 backdrop-blur-md">
      <Sidebar/>
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-36 p-2"> 
  </div>
    </div>
    <div className="bg-background/30 backdrop-blur-md flex-1 p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
        <Card className="border-primary  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED]">
     <CoursesList
     items={[...coursesInProgress, ...completedCourses]}
     />
     </Card>
     {/* Todo info card*/ }
     </div>
     <div>
      <Card className="border-primary  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED]">
     <CoursesList
     items={[...coursesInProgress, ...completedCourses]}
     />
     </Card>
     </div>
     <div>
     <Card className="border-primary  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED]">
     <CoursesList
     items={[...coursesInProgress, ...completedCourses]}
     />
     </Card>
     {/* Todo lasteds musics*/ }
     </div>
     <div>
     <Card className="border-primary  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED]">
     <CoursesList
     items={[...coursesInProgress, ...completedCourses]}
     />
     </Card>
     {/* Todo activities*/ }
     </div>
     <div>
     
     {/* Todo graphics*/ }
     </div>
    </div>
    
    </div>
   
  </main>
  )
}
 
export default dashboardPage;