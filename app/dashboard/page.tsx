import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/progress";
import { cn } from "@/lib/utils";
import { Rank } from "@/app/(protected)/_components/activities/rank";
import { getMusics, getNewMusics } from "@/actions/get-musics";

import { ensureProgressGameExists, getProgressMusic, postProgressMusic } from "@/actions/game-progress";
import { MusicList } from "../(protected)/_components/game/music/music-list";
import { PercentageBanner } from "../(protected)/_components/scoreboard/dashboard-status";
import { CoursesList } from "../(protected)/_components/course/courses/courses-list";
import { getCourses } from "@/actions/get-courses";
import { getUserPercentageCourse } from "@/actions/course-progress";
import { getProgressActivities } from "@/actions/get-userProgress";
import { getUserPercentageAverage } from "@/actions/progress-avarage";
import { ProgressGraphComponent } from "../(protected)/_components/scoreboard/graph";
import { calculateAndStoreMonthlyProgress } from "@/actions/monthlyProgress";
import { RadialGraphic } from "../(protected)/_components/scoreboard/radial-graph";
import dynamic from "next/dynamic";
import { Explorer } from "@/components/3Dcomponents/yellow-explorer/model";

const dashboardPage = async () => {
  const user = await auth();
  const userId = user?.user.id;

  if (!userId) {
    return redirect("/");
  }
  
  
  const courses = await getCourses({
    userId
  });

  
const SceneGuitar = dynamic(() => import('@/components/3Dcomponents/scene-guitar'), {
  ssr: false
})

  const montly = await calculateAndStoreMonthlyProgress( userId );

  const newMusics = await getNewMusics("");
  
  const UserPercentageCourseData = getUserPercentageCourse( userId );
  const UserPercentageMusicData = getProgressMusic(userId);
  const UserPercentageActivitiesData = getProgressActivities(userId); 
  const UserPercentageAverageData = getUserPercentageAverage(userId);
  const createMusicProgressData = ensureProgressGameExists(userId)

  const [
    createMusicProgress,
    UserMusicPercentage,
    UserActivitiesPercentage,
    UserPercentageCourse,
    UserPercentageAverage,
  ] = await Promise.all([
    createMusicProgressData,
    UserPercentageMusicData,
    UserPercentageActivitiesData,
    UserPercentageCourseData,
    UserPercentageAverageData,
  ]);
  
  const PercentageCourse = Number(UserPercentageCourse.percentage.toFixed(1)) || 0;
  const MusicPercentage = Number(UserMusicPercentage.totalPercentage.toFixed(1)) || 0;
  const ActivitiesPercentage = Number(UserActivitiesPercentage.totalPercentage.toFixed(1)) || 0;
  if (!UserPercentageMusicData) {
    createMusicProgress
  }
  
  return ( 
    <Card className="p-4 h-[90vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none shadow-none ">
    
      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        
        <div>
          <Card className="flex shadow-none border-2 border-muted-foreground h-[30vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none ">
            <div className="flex flex-col ">
              <h1 className="text-md text-muted-foreground font-bold px-6 pt-6">Welcome back,</h1>
              <h1 className="text-2xl font-bold px-6">{user.user.name} </h1>
         
              <h2 className="text-sm text-muted-foreground px-6">great to see you again!</h2>
            </div>
            <div className="">
            <div className="items-center h-full absolute">
            <SceneGuitar>
            <Explorer/>
          </SceneGuitar>
         </div>
            </div>
          </Card>
        </div>
  
        <div>
          <Card className="shadow-none border-2 border-muted-foreground h-[30vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none ">
            <RadialGraphic userId={userId} />
            
          </Card>
        </div>
  
        <div>
          <Card className="flex flex-col  border-2 border-muted-foreground h-[30vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none shadow-none ">
            <ProgressGraphComponent monthlyProgress={montly} />
          </Card>
        </div>
  
      </div>
  
      {/* Restante do código permanece igual */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <Card className="shadow-none border-2 border-muted-foreground h-[40vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none overflow-x-auto">
  <div className="sticky top-0 bg-background z-10">
    <h1 className="text-2xl font-bold p-2 px-6">New Courses</h1>
    <h2 className="text-sm text-muted-foreground px-6">See the list of new courses</h2>
      </div>
       <CoursesList
        classname=" w-full gap-2 p-4 text-wrap text-center grid lg:grid-cols-2 xl:grid-cols-3"
        items={[...courses]}
        />
      </Card>
  
      <Card className="shadow-none border-2 border-muted-foreground h-[40vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none">
      <div className="sticky top-0 bg-background z-20"> {/* Adicionando z-20 para garantir que o título fique sobreposto */} 
       <h1 className="text-2xl font-bold p-2 px-6">New musics</h1>
        <h2 className="text-sm text-muted-foreground px-6">See the list of new musics</h2>
         </div>
          <div>
           <MusicList items={[...newMusics]} />
          </div>
        </Card>
      </div>
  
      <div className="grid  xl:grid-cols-3 lg:grid-cols-2  gap-4 mt-4">
  
        <Card className="shadow-none border-2 border-muted-foreground h-[12vh]">
          <PercentageBanner title="Music score" leaderBoardPage="/game/leaderboard" percentage={MusicPercentage} />
        </Card>
  
        <Card className="shadow-none border-2 border-muted-foreground h-[12vh]">
          <PercentageBanner title="Course score" leaderBoardPage="/courses/leaderboard" percentage={PercentageCourse} />
        </Card>
  
        <Card className="shadow-none border-2 border-muted-foreground h-[12vh]">
          <PercentageBanner title="Activities Score" leaderBoardPage="/Activities/leaderboard" percentage={ActivitiesPercentage} />
        </Card>
      </div>
    </Card>
  );
};

export default dashboardPage;
