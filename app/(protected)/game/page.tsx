"use client"

import dynamic from "next/dynamic";

import { Room } from "@/components/3Dcomponents/Room/Model";



const SceneRoom = dynamic(() => import('@/components/3Dcomponents/scene-room'), {
  ssr: false
})

 const Game = () => {
 
  return (
    <main className=" flex gap-4 rounded-sm h-full w-s justify-between">
    <div className="bg-background/30 backdrop-blur-md flex-1">
      <div className="h-full w-full flex justify-center items-center">
    
      <div className="absolute inset-0 ">
         
         <SceneRoom> 
          <Room/>
         </SceneRoom>
      </div>
    </div>
    </div>
  </main>
  );
}
export default Game