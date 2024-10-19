import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/progress";
import { cn } from "@/lib/utils";
import { Rank } from "@/app/(protected)/_components/activities/rank";
import { getMusics, getNewMusics } from "@/actions/get-musics";

import { getProgressMusic } from "@/actions/game-progress";
import { MusicList } from "../(protected)/_components/game/music/music-list";
import { PercentageBanner } from "../(protected)/_components/scoreboard/dashboard-status";
import { CoursesList } from "../(protected)/_components/course/courses/courses-list";
import { getCourses } from "@/actions/get-courses";
import { getUserPercentageCourse } from "@/actions/course-progress";
import { getProgressActivities } from "@/actions/get-userProgress";
import { getUserPercentageAverage } from "@/actions/progress-avarage";
import { ProgressGraphComponent } from "../(protected)/_components/scoreboard/graph";
import { calculateAndStoreMonthlyProgress } from "@/actions/monthlyProgress";

const dashboardPage = async () => {
  const user = await auth();
  const userId = user?.user.id;

  if (!userId) {
    return redirect("/");
  }
  
  
  const courses = await getCourses({
    userId
  });

  const montly = await calculateAndStoreMonthlyProgress( userId );

  const newMusics = await getNewMusics("");
  const musics = await getMusics(userId);
  
  const UserPercentageCourseData = getUserPercentageCourse( userId );
  const UserPercentageMusicData = getProgressMusic(userId);
  const UserPercentageActivitiesData = getProgressActivities(userId); 
  const UserPercentageAverageData = getUserPercentageAverage(userId);

  const [
    UserMusicPercentage,
    UserActivitiesPercentage,
    UserPercentageCourse,
    UserPercentageAverage,
  ] = await Promise.all([
    UserPercentageMusicData,
    UserPercentageActivitiesData,
    UserPercentageCourseData,
    UserPercentageAverageData,
  ]);
  
  const PercentageCourse = Number(UserPercentageCourse.percentage.toFixed(1)) || 0;
  const MusicPercentage = Number(UserMusicPercentage.totalPercentage.toFixed(1)) || 0;
  const ActivitiesPercentage = Number(UserActivitiesPercentage.totalPercentage.toFixed(1)) || 0;
  const AveragePercentage = Number(UserPercentageAverage.percentage.toFixed(1)) || 0;

  return ( 
    <Card className="p-4 h-[90vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none shadow-none bg-transparent">
      
      <div className="grid gap-4" style={{ gridTemplateColumns: '36% 26% 36%' }}>
    <div >
      <Card className="shadow-none border-2 border-muted-foreground h-[30vh]">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold p-2 px-6">Keep going</h1>
          <h2 className="text-sm text-muted-foreground px-6">Continue where you left off</h2>
        </div>
        
      </Card>
    </div>

    <div>
      <Card className="shadow-none border-2 border-muted-foreground h-[30vh] flex justify-center items-center">
        {/* Conteúdo do card do meio */}
      </Card>
    </div>
        <ProgressGraphComponent
        monthlyProgress={montly} />
  </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-4">
        <Card className="shadow-none border-2 border-muted-foreground h-[40vh]">
          <h1 className="text-2xl font-bold p-2 px-6">New Courses</h1>
          <CoursesList
     items={[...courses]}
     />
        </Card>
        <Card className="shadow-none border-2 border-muted-foreground h-[40vh]">
        <h1 className="text-2xl font-bold p-2 px-6">New musics</h1>
        <h2 className="text-sm text-muted-foreground px-6">See the list of new musics </h2>
          <MusicList items={[...newMusics]} />
        </Card>
        
       
      </div>
      <div className="grid md:hiden lg:grid-cols-4 gap-4 mt-4">
        <Card className="shadow-none border-2 border-muted-foreground h-[12vh]">
        <PercentageBanner
          title="Performance"
          leaderBoardPage="/scoreboard"
          percentage={AveragePercentage}
          />
        </Card>
        <Card className="shadow-none border-2 border-muted-foreground h-[12vh]">
          <PercentageBanner
          title="Music score"
          leaderBoardPage="/game/leaderboard"
          percentage={MusicPercentage}
          />
        </Card>
        <Card className="shadow-none border-2 border-muted-foreground h-[12vh]">
        <PercentageBanner
          title="Course score"
          leaderBoardPage="/courses/leaderboard"
          percentage={PercentageCourse}
          />
          
        </Card>
        
        <Card className="shadow-none border-2 border-muted-foreground h-[12vh]">
        <PercentageBanner
          title="Activities Score"
          leaderBoardPage="/Activities/leaderboard"
          percentage={ActivitiesPercentage}
          />
        </Card>
      </div>
    </Card>
  );
};

export default dashboardPage;
