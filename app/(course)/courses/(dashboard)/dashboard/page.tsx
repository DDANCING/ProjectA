import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CoursesList } from "../../../../(protected)/_components/course/courses/courses-list";
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
   
   
    <Card className="hidden lg:block p-5 w-full stick self-end bottom-6 max-h-[calc(94vh-40px)] overflow-y-auto h-[89vh] relative top-0 pb-10 scrollbar-none">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
        <Card className="shadow-none border-2 border-muted ">
        <CoursesList
     items={[...coursesInProgress, ...completedCourses]}
     />
     </Card>
   
     </div>
     <div>
      <Card className="shadow-none border-2 border-muted  flex h-full ">
     
     </Card>
     </div>
     <div>
     <Card className="shadow-none border-2 border-muted h-96">
     
     </Card>
    
     </div>
     <div>
     <Card className="shadow-none border-2 border-muted h-96 ">
     
     </Card>
  
     </div>
     <div>
     
     </div>
    </div>
    
    </Card>

  )
}
 
export default dashboardPage;