import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CoursesList } from "../../../../(protected)/_components/course/courses/courses-list";
import { Card } from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/progress";
import { getUserPercentageCourse } from "@/actions/course-progress";

const dashboardPage = async () => {
  const user = await auth();
  const userId = user?.user.id;

  if (!userId) {
    return redirect("/");
  }


  const UserPercentageData = getUserPercentageCourse( userId );



  const [
    UserPercentage,
  ] = await Promise.all([
    UserPercentageData,
  ]);



 
  const {
    completedCourses,
    coursesInProgress,
  } = await getDashboardCourses(userId);

  return ( 
   
   
    <Card className=" p-5 w-full stick self-end bottom-6 max-h-[calc(94vh-40px)] overflow-y-auto h-[89vh] relative top-0 pb-10 scrollbar-none">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
        <Card className="shadow-none border-2 border-muted ">
       <h1 className="text-2xl font-bold p-2 px-6"> Keep going </h1>
       <h2 className="text-sm text-muted-foreground px-6"> Continue where you left off </h2>
        <CoursesList
     items={[...coursesInProgress, ...completedCourses]}
     />
     </Card>
   
     </div>
     <div>
      <Card className="shadow-none border-2 border-muted  flex h-full ">
      <div className="flex flex-col ">
      <h1 className="text-2xl font-bold p-2 px-6"> Raise your score </h1>
      <h2 className="text-sm text-muted-foreground px-6"> take more courses and raise your score </h2>
      
        <div>
          <div className="bg-primary/80 rounded-2xl w-[217px] h-[93px] m-6"></div>
          <div className="bg-primary/80 rounded-2xl w-[217px] h-[93px] m-6"></div>
        </div>
        
      </div>
      <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-primary",
            value: "text-2xl font-semibold text-white",
          }}
          value={UserPercentage}
          strokeWidth={2}
          showValueLabel={true}
        />
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