"use client"

import { Crown } from "@/components/3Dcomponents/crown/model";
import SceneGuitar from "@/components/3Dcomponents/scene-guitar";
import { Card } from "@/components/ui/card";

const scoreboardPage = () => {
  return ( 
    <div className=" flex h-full ">
    <div className="flex-1 ">
    <SceneGuitar>
      <Crown/>
    </SceneGuitar>
    </div>
    <div className="w-[50%] p-4">
      <Card className="h-full ">

      </Card>
    </div>
    </div>
   );
}
 
export default scoreboardPage;