
import { Crown } from "@/components/3Dcomponents/crown/model";

import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import ScoreboardList from "../_components/scoreboard/Scoreboard-list";

const SceneGuitar = dynamic(() => import('@/components/3Dcomponents/scene-guitar'), {
  ssr: false
})


const scoreboardPage = () => {
  return ( 
    <div className=" flex h-full ">
      <div className="bg-transparent backdrop-blur-md flex-1 hidden xl:block">
      <div className="h-full w-full flex justify-center items-center">
    
      <div className="absolute inset-0 -z-10">
    <SceneGuitar>
      <Crown/>
    </SceneGuitar>
    </div>
    </div>
    </div>
    <div className="w-full xl:w-[50%] p-4">
      <Card className="h-full ">
      <Card className=" overflow-y-auto h-[86vh] flex-1 relative top-0 pb-10 scrollbar-none">
       <ScoreboardList/>
      </Card>
      </Card>
    </div>
    </div>
   );
}
 
export default scoreboardPage;