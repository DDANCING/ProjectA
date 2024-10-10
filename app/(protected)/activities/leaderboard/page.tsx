

import { Crown } from "@/components/3Dcomponents/crown/model";

import { Card } from "@/components/ui/card";
import LeaderboardList from "../../_components/scoreboard/list";
import dynamic from "next/dynamic";

const SceneGuitar = dynamic(() => import('@/components/3Dcomponents/scene-guitar'), {
  ssr: false
})

const leaderboardPage = () => {
  return ( 
    <div className=" flex h-full ">
    <div className="flex-1 ">
    <Card className=" overflow-y-auto h-[86vh] flex-1 relative top-0 pb-10 scrollbar-none">
       <LeaderboardList/>
      </Card>
    </div>
    </div>
   );
}
 
export default leaderboardPage;