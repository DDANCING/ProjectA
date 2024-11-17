import { getMusicActivitiesById } from "@/actions/get-activities";
import { getMusicCourses } from "@/actions/get-courses";
import { getMusic } from "@/actions/get-musics";
import { List } from "@/app/(protected)/_components/activities/list";
import { CoursesList } from "@/app/(protected)/_components/course/courses/courses-list";
import { auth } from "@/auth";
import { Card } from "@/components/ui/card";
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
    <Card className="p-4 h-[90vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none shadow-none ">
    
      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        
        <div>
          <Card className="flex shadow-none border-2 border-muted-foreground h-[30vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none ">
          <List
          activities={activities}
        />
          </Card>
        </div>
  
        <div>
        
        </div>
  
      </div>
  
      
      <Card className="shadow-none border-2 border-muted-foreground h-[40vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none overflow-x-auto">
  <div className="sticky top-0 bg-background z-10">
    <h1 className="text-2xl font-bold p-2 px-6">Courses of {music?.title}</h1>
      </div>
       <CoursesList
        classname=" w-full gap-2 p-4 text-wrap text-center grid lg:grid-cols-2 xl:grid-cols-3"
        items={[...courses]}
        />
      </Card>
  
     
      
  
      <div className="grid  xl:grid-cols-3 lg:grid-cols-2  gap-4 mt-4">
  
       
      </div>
    </Card>
  );
};

export default GameIdPage;