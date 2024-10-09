import { getActivities } from "@/actions/get-activities";
import { List } from "../_components/activities/list";
import { Card } from "@/components/ui/card";
import { getUserProgress } from "@/actions/get-userProgress";

const CoursesPage = async () => {
  const activitieData =  getActivities();
  const userProgressData =  getUserProgress(); 
  const [
    activitie,
     userProgress,
    ] = await Promise.all([
    activitieData,
    userProgressData,
  ])
  return (
    <Card className="h-full max-w-[912px] px-3 ">
      <h1 className="text-2xl font-bold text-primary">
        
      </h1>
      <List
        activities={activitie}
        activeActivitieId={userProgress?.activeExercise.id}  
      />
    </Card>
  );
};

export default CoursesPage;
