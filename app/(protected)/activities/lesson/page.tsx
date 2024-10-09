import { getLesson } from "@/actions/get-lesson";
import { getUserProgress } from "@/actions/get-userProgress";
import { redirect } from "next/navigation";
import { Quiz } from "../../_components/activities/lesson/quiz";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { getUserSubscription } from "@/actions/get-user-subscription";


const LessonPage = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [
    lesson,
    userProgress,
    userSubscription,
  ] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);
  
  if(!lesson || !userProgress) {
   redirect('/activities');
   
  }
 
  const initialPercentage = lesson.challenges.filter((
    challenge
  ) => challenge.completed)
  .length / lesson.challenges.length * 100;

  return (
    
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
    
  );
}
export default LessonPage;