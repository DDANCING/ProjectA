import { getLesson } from "@/actions/get-lesson";
import { getUserProgress } from "@/actions/get-userProgress";
import { redirect } from "next/navigation";
import { Quiz } from "../../_components/activities/lesson/quiz";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";


const LessonPage = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();

  const [
    lesson,
    userProgress,
  ] = await Promise.all([
    lessonData,
    userProgressData,
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
      userSubscription={null}
    />
    
  );
}
export default LessonPage;