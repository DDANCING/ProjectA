import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Header } from "../../_components/activities/header";
import { UserProgress } from "../../_components/activities/user-progress";
import { getUserProgress } from "@/actions/get-userProgress";
import { getUnits } from "@/actions/get-units";
import { getExerciseProgress } from "@/actions/get-exercise-progress";
import { getActiveLesson, getLessonPercentage } from "@/actions/get-lesson";
import { Unit } from "../../_components/activities/unit";
import { getUserSubscription } from "@/actions/get-user-subscription";
import { Promo } from "../../_components/activities/shop/promo";
import { Rank } from "../../_components/activities/rank"; 
import { Quests } from "../../_components/activities/quests";

const learnPage = async () => {
  const user = await auth();
  const userId = user?.user.id;

  if (!userId) {
    return redirect("/activities");
  }

  const exerciseProgressData = getExerciseProgress();
  const activeLessonData = getActiveLesson();
  const userProgressData = getUserProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();
  const userSubscriptionData = getUserSubscription();

  const [
    exerciseProgress,
    activeLesson,
    userProgress,
    units,
    lessonPercentage,
    userSubscription,
  ] = await Promise.all([
    exerciseProgressData,
    activeLessonData,
    userProgressData,
    unitsData,
    lessonPercentageData,
    userSubscriptionData,
  ]);

  if (!exerciseProgress) {
    return redirect("/activities");
  }

  if (!activeLesson) {
    return redirect("/activities");
  }

  if (!userProgress || !userProgress.activeExercise) {
    return redirect("/activities");
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <Card className="hidden lg:block w-[368px] stick self-end bottom-6">
        <div className="min-h-[calc(94vh-40px)] sticky top-6 flex flex-col gap-y-4">
          <UserProgress
            activeCourse={userProgress.activeExercise}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={!!userSubscription?.isActive}
          />
          {!isPro && <Promo />}
          <Rank points={userProgress?.points || 0} />
          <Quests points={userProgress?.points || 0} /> 
        </div>
      </Card>
      <Card className="bg-background overflow-y-auto h-[89vh] flex-1 relative top-0 pb-10 scrollbar-none">
        <Header title={userProgress.activeExercise.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      
      </Card>
    </div>
  );
};

export default learnPage;