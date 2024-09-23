import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Header } from "../../_components/activities/header";
import { UserProgress } from "../../_components/activities/user-progress";
import { getUserProgress } from "@/actions/get-userProgress";
import { getUnits } from "@/actions/get-units";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import { Unit } from "../../_components/activities/unit";


const dashboardPage = async () => {
  const user = await auth();
  const userId = user?.user.id;


  if (!userId) {
    return redirect("/activities");
  }
 const userProgressData = getUserProgress();
 const unitsData = getUnits();

 const [
  userProgress,
  units,
] = await Promise.all([
  userProgressData,
  unitsData,
]);

if(!userProgress || !userProgress.activeExercise) {
  redirect("/activities")
}



  return ( 
   
   
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <Card className="hidden lg:block w-[368px] stick self-end bottom-6">
        <div className="min-h-[calc(94vh-48px)] sticky top-6 flex flex-col gap-y-4">
           <UserProgress
            activeCourse={{ title: "guitar", imageSrc: "\public\img\icons\Guitar.svg"}}
            hearts={5}
            points={100}
            hasActiveSubscription={false}
           />
        </div>
      </Card>
      <Card className="bg-background/30 overflow-y-auto h-[89vh] flex-1 relative top-0 pb-10">
          <Header title={userProgress.activeExercise.title}/>
          {units.map((unit) => (
            <div key={unit.id} className="mb-10">
              <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={undefined}
              activeLessonPercentage={0}
              />
            </div>
          ))}
      </Card>
    </div>

  )
}
 
export default dashboardPage;