



import CourseLeaderboardList from "@/app/(protected)/_components/scoreboard/course-list";
import { Card } from "@/components/ui/card";



const activitiesLeaderboardPage = () => {
  return ( 
    <div className=" flex h-full ">
    <div className="flex-1 ">
    <Card className=" overflow-y-auto h-[86vh] flex-1 relative top-0 pb-10 scrollbar-none">
       <CourseLeaderboardList/>
      </Card>
    </div>
    </div>
   );
}
 
export default activitiesLeaderboardPage;