import Image from "next/image";
import { redirect } from "next/navigation";




import { Progress } from "@/components/ui/progress";
import {  getActivitiesUserProgress } from "@/actions/get-userProgress";
import { getUserSubscription } from "@/actions/get-user-subscription";
import { UserProgress } from "../../_components/activities/user-progress";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { title } from "process";
import { Promo } from "../../_components/activities/shop/promo";
import { Rank } from "../../_components/activities/rank";
import { quests } from "@/constants";
import { Quests } from "../../_components/activities/quests";


const QuestsPage = async () => {
  const userProgressData =  getActivitiesUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [
    userProgress,
    userSubscription,
  ] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeExercise) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return ( 
    <div className="flex flex-row-reverse gap-[48px] ">
     <Card className="hidden lg:block w-[368px] stick self-end bottom-6 max-h-[calc(94vh-40px)] overflow-y-auto h-[89vh] relative top-0 pb-10 scrollbar-none">
     <div className="min-h-[calc(94vh-40px)] sticky top-6 flex flex-col gap-y-4">
          <UserProgress
            activeCourse={ userProgress.activeExercise }
            hearts={ userProgress.hearts }
            points={userProgress.points}
            hasActiveSubscription={!!userSubscription?.isActive}
          />
           {!isPro && (
          <Promo />
        )} 
         {userProgress && 
           <div className="border-2 border-muted m-2 rounded-xl">
           <Rank 
           link="/activities/leaderboard"
           points={userProgress?.points || 0} />
           </div>
          }
      
        </div>
       
    </Card>
    <Card className=" overflow-y-auto h-[89vh] flex-1 relative top-0 pb-10 scrollbar-none">
        <div className="w-full flex flex-col items-start p-6">
          <h1 className="text-center font-bold text-foreground text-2xl my-6">
            Quests
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Complete quests by earning points.
          </p>
        
          <ul className="w-full">
            {quests.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;

              return (
                <div className="flex items-center w-full p-4 gap-x-4 border-t-2 border-muted" key={quest.title}>
                  <Image
                  src="/img/icons/XP.svg"
                  alt="points"
                  width={60}
                  height={60}
                  />
                  <div className="flex flex-col gap-y-2 w-full">
                     <p className="text-foreground text-xl font-bold">
                       {quest.title}
                     </p>
                     <Progress
                     value={progress}
                     className="h-3"
                     />
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
        </Card>
      
    </div>
  );
};
 
export default QuestsPage;