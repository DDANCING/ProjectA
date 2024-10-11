import { getActivities } from "@/actions/get-activities";
import { List } from "../_components/activities/list";
import { Card } from "@/components/ui/card";
import { getUserProgress } from "@/actions/get-userProgress";
import { Rank } from "../_components/activities/rank";
import { Promo } from "../_components/activities/shop/promo";
import { UserProgress } from "../_components/activities/user-progress";
import { getUserSubscription } from "@/actions/get-user-subscription";
import { Quests } from "../_components/activities/quests";

const CoursesPage = async () => {
  const activitieData = getActivities();
  const userProgressData = getUserProgress(); 
  const userSubscriptionData = getUserSubscription();

  const [
    activitie,
    userProgress,
    userSubscription,
  ] = await Promise.all([
    activitieData,
    userProgressData,
    userSubscriptionData,
  ]);

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px]">
      <Card className="hidden lg:block w-[368px] stick self-end bottom-6 max-h-[calc(94vh-40px)] overflow-y-auto h-[89vh] relative top-0 pb-10 scrollbar-none">
        <div className="min-h-[calc(94vh-40px)] sticky top-6 flex flex-col gap-y-4">
          {userProgress ? (
            <UserProgress
              activeCourse={userProgress.activeExercise}
              hearts={userProgress.hearts}
              points={userProgress.points}
              hasActiveSubscription={isPro}
            />
          ) : (
            <></>
          )}
          
          {!isPro && <Promo />}
          
          {userProgress && <Rank points={userProgress?.points || 0} />}
          {userProgress && <Quests points={userProgress?.points || 0} />}
        </div>
      </Card>
      
      <Card className="p-5 overflow-y-auto h-[89vh] flex-1 relative top-0 pb-10 scrollbar-none">
        
        <List
          activities={activitie}
          activeActivitieId={userProgress?.activeExercise?.id}  
        />
      </Card>
    </div>
  );
};

export default CoursesPage;
