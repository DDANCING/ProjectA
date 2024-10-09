import { getActivities } from "@/actions/get-activities";
import { List } from "../_components/activities/list";
import { Card } from "@/components/ui/card";
import { getUserProgress } from "@/actions/get-userProgress";
import { UserProgress } from "../_components/activities/user-progress";
import { Promo } from "../_components/activities/shop/promo";
import { Quests } from "../_components/activities/quests";
import { getUserSubscription } from "@/actions/get-user-subscription";
import { redirect } from "next/navigation";

const CoursesPage = async () => {
  const activitieData =  getActivities();
  const userProgressData =  getUserProgress(); 
  const userSubscriptionData = getUserSubscription();
 
  const [
    activitie,
     userProgress,
     userSubscription,
    ] = await Promise.all([
    activitieData,
    userProgressData,
    userSubscriptionData,
    
  ])
  
  if (!userProgress || !userProgress.activeExercise) {
    redirect('/activities');
   }
   const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
    <Card className="hidden lg:block w-[368px] stick self-end">
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
       <Quests
       points={userProgress.points}
       />
       </div>
      
   </Card>
    <Card className="h-full max-w-[912px] px-3 ">
      <h1 className="text-2xl font-bold text-primary">
        
      </h1>
      <List
        activities={activitie}
        activeActivitieId={userProgress?.activeExercise.id}  
      />
    </Card>
    </div>
  );
};

export default CoursesPage;
