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

  )
}
 
export default dashboardPage;