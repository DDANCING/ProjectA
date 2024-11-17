import { getMusicActivitiesById } from "@/actions/get-activities";
import { getMusicCourses } from "@/actions/get-courses";
import { getMusic } from "@/actions/get-musics";
import { List } from "@/app/(protected)/_components/activities/list";
import { CoursesList } from "@/app/(protected)/_components/course/courses/courses-list";
import Tablature from "@/app/(protected)/_components/game/tablature/tabs";
import { auth } from "@/auth";
import { Card } from "@/components/ui/card";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation"


type Props = {
  params: {
    gameId: number;
  };
};

const GameIdPage = async ({ params }: Props) => {
  const user = await auth();
  const userId = user?.user.id;
  if(!userId) {
  redirect("/auth/login")
  }
  const activitiesData = getMusicActivitiesById(params.gameId)
  const courseData = getMusicCourses({
    userId: userId, 
    musicId: params.gameId,
  });
  const musicData = await getMusic(params.gameId);
  
  const [
    activities,
    courses,
    music,
  ] = await Promise.all([
    activitiesData,
    courseData,
    musicData,
  ]);


  
  return (
    <Card className="p-4 h-[90vh] flex relative top-0 overflow-y-auto scrollbar-none shadow-none ">
      <Card className="mr-4 shadow-none border-2 border-muted-foreground flex-1">
      <Link className="sticky flex top-0 z-10 m-2 ga" href={`/game/${params.gameId}`}>
        <MoveLeft/> <h1>Return to play</h1>
        </Link>
         <Tablature
          AbcUrl={music?.tabs || "no content"}
         />
         </Card>
      
        
        <div>
          <Card className="flex shadow-none border-2 border-muted-foreground h-[40vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none ">
          <div className="sticky top-0 bg-background z-10">
    <h1 className="text-2xl font-bold p-2 px-6">Activities of</h1>
    <h2 className="text-sm font-bold text-muted-foreground px-6">{music?.title}</h2>
      </div>
          <List
          activities={activities}
        />
          </Card>

          <Card className="mt-4 shadow-none border-2 border-muted-foreground h-[45vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none overflow-x-auto">
  <div className="sticky top-0 bg-background z-10">
    <h1 className="text-2xl font-bold p-2 px-6">Courses of</h1>
    <h2 className="text-sm font-bold text-muted-foreground px-6">{music?.title}</h2>
      </div>
       <CoursesList
        classname=" w-full gap-2 p-4 text-wrap text-center grid lg:grid-cols-2"
        items={[...courses]}
        />
      </Card>
        </div>
 
      
    </Card>
  );
};

export default GameIdPage;