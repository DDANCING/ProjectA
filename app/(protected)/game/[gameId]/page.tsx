import { getLesson } from "@/actions/get-lesson";
import {  getActivitiesUserProgress } from "@/actions/get-userProgress";
import { redirect } from "next/navigation";
import { getUserSubscription } from "@/actions/get-user-subscription";


type Props ={
  params: {
    gameId: number;

  }
}
const LessonIdPage = async ({
  params,
} : Props) => {


  const [
    
  ] = await Promise.all([
    
  ]);


  return (
    
    <div>

    </div>
    
  );
}
export default LessonIdPage;