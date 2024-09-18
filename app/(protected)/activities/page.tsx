import { getActivities } from "@/actions/get-activities";
import { List } from "../_components/activities/list";
import { Card } from "@/components/ui/card";




const CoursesPage = async () => {
  const activitie = await getActivities();
  return (
    <Card className="h-full max-w-[912px] px-3 ">
     <h1 className="text-2xl font-bold text-primary">
       
     </h1>
     <List
        activities={activitie}
        activeActivitieId={1}
     />
    </Card>
  );
}

export default CoursesPage;