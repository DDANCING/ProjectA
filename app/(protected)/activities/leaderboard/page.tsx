

import { Crown } from "@/components/3Dcomponents/crown/model";
import SceneGuitar from "@/components/3Dcomponents/scene-guitar";
import { Card } from "@/components/ui/card";
import LeaderboardList from "../../_components/scoreboard/list";

const leaderboardPage = () => {
  return ( 
    <div className=" flex h-full ">
    <div className="flex-1 ">
    <Card className="h-full ">
       <LeaderboardList/>
      </Card>
    </div>
    <div className="w-[50%] p-4">
      
      <SceneGuitar>
      <Crown/>
    </SceneGuitar>
    </div>
    </div>
   );
}
 
export default leaderboardPage;