

import { Crown } from "@/components/3Dcomponents/crown/model";

import { Card } from "@/components/ui/card";
import LeaderboardList from "../../_components/scoreboard/list";
import dynamic from "next/dynamic";
import { getUserProgress } from "@/actions/get-userProgress";

const SceneGuitar = dynamic(() => import('@/components/3Dcomponents/scene-guitar'), {
  ssr: false
})



const leaderboardPage = async () => {
  const userProgressData = getUserProgress();
  const [
    exerciseProgress,
  ] = await Promise.all([
    userProgressData,
    
  ]);
  return ( 
    <div className=" flex h-full ">
    <div className="flex-1 ">
    <Card className=" overflow-y-auto h-[89vh] flex-1 relative top-0 pb-10 scrollbar-none">
       <LeaderboardList
       points={exerciseProgress?.points || 0}
       />
      </Card>
    </div>
    <div className="w-[50%] p-4 hidden lg:block">
      
      <SceneGuitar>
      <Crown/>
    </SceneGuitar>
    </div>
    </div>
   );
}
 
export default leaderboardPage;