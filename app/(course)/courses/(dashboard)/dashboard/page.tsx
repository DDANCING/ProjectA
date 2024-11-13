import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CoursesList } from "../../../../(protected)/_components/course/courses/courses-list";
import { Card } from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/progress";
import { getUserPercentageCourse } from "@/actions/course-progress";
import { cn } from "@/lib/utils";
import { getCourses } from "@/actions/get-courses";
import { Rank } from "@/app/(protected)/_components/activities/rank";
import { UserProgress } from "@/app/(protected)/_components/activities/user-progress";

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
  const points  = UserPercentage.points || 0;
  const percentage = UserPercentage.percentage || 0;
  const lastPercentage = UserPercentage.lastPercentageWin || 0;

  const {
    completedCourses,
    coursesInProgress,
  } = await getDashboardCourses(userId);

  const courses = await getCourses({
    userId
  });

  return ( 
   
   
    
    <Card className="shadow-none p-4 overflow-y-auto h-[89vh] flex-1 relative top-0 pb-10 scrollbar-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
        <Card className="shadow-none border-2 border-muted-foreground ">
       <h1 className="text-2xl font-bold p-2 px-6"> Keep going </h1>
       <h2 className="text-sm text-muted-foreground px-6"> Continue where you left off </h2>
        <CoursesList
    classname="w-full gap-2 p-4 text-wrap text-center grid sm:grid-cols-2 md:grid-cols-3"
     items={[...coursesInProgress, ...completedCourses]}
     />
     </Card>
   
     </div>
     <div>
      <Card className="shadow-none border-2 border-muted-foreground  flex h-full">
      <div className="flex flex-col ">
      <h1 className="text-2xl font-bold p-2 px-6"> Raise your score </h1>
      <h2 className="text-sm text-muted-foreground px-6"> take more courses and raise your score </h2>
      
        <div>
          <div className="bg-primary/80 rounded-xl w-[230px] h-[93px] m-6 p-3 font-bold">
          <h1>Courses completed</h1>
          <h2 className="text-3xl px-4">{completedCourses.length}</h2>
          </div>
          <div className="bg-primary/80 rounded-xl w-[230px] h-[93px] m-6 p-3 font-bold">
          <h1>Courses to be completed</h1>
          <h2 className="text-3xl px-4">{coursesInProgress.length}</h2>
          </div>
        </div>
        
      </div>
      <div className="relative flex justify-center items-center ml-auto mx-16">
      <CircularProgress
          classNames={{
            svg: "w-[24vh] h-[24vh] drop-shadow-md",
            indicator: "stroke-primary",
            value: "text-2xl font-semibold text-foreground",
          }}
          value={percentage}
          strokeWidth={2}
          showValueLabel={true}
        />
         <div className="absolute flex flex-col items-center justify-center">
        <h1 className="text-xs text-muted-foreground">accuracy</h1>
        <div className="mb-6"></div>
        <div className="ml-auto mt-2"> 
      <h2 
      className={cn(
        "text-xs",
        percentage > lastPercentage
          ? "text-emerald-400"
          : "text-rose-500",
      )}
      >{percentage > lastPercentage ? "+" : "" }{percentage - lastPercentage || 0}%</h2>
      </div>
        <h2 className="text-xs text-muted-foreground">Total Score</h2>
         
        </div>
      </div>
     </Card>
     </div>
     <div>
      
     <Card className="shadow-none border-2 border-muted-foreground">
     <h1 className="text-2xl font-bold p-2 px-6"> New courses </h1>
     <h2 className="text-sm text-muted-foreground px-6"> buy new courses </h2>
     <CoursesList
     classname="w-full gap-2 p-4 text-wrap text-center grid sm:grid-cols-2 md:grid-cols-3"
     items={[...courses]}
     />
    
     </Card>
    
     </div>
     <div>
     <Card className="shadow-none border-2 border-muted-foreground ">
     <Rank
     link="/courses/leaderboard"
     points={points} />
     </Card>
  
     </div>
     <div>
     
     </div>
    </div>
    
  </Card>

  )
}
 
export default dashboardPage;