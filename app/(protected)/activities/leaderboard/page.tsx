

import { Card } from "@/components/ui/card";
import ActivitiesLeaderboardList from "../../_components/scoreboard/activities-list";



const leaderboardPage = () => {
  return ( 
    <div className=" flex h-full ">
    <div className="flex-1 ">
    <Card className="shadow-none overflow-y-auto h-[86vh] flex-1 relative top-0 pb-10 scrollbar-none">
       <ActivitiesLeaderboardList/>
      </Card>
    </div>
    </div>
   );
}
 
export default leaderboardPage;