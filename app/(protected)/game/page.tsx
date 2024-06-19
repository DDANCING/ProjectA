"use client"

import Captador from "@/app/(protected)/_components/pickup/pickup";
import  MusicsListPage  from "@/app/(protected)/_components/music/list";
import dynamic from "next/dynamic";

import { Room } from "@/components/3Dcomponents/Room/Model";
import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";


const SceneRoom = dynamic(() => import('@/components/3Dcomponents/scene-room'), {
  ssr: false
})

 const Game = () => {
 
  return (
    <main className="p-4 flex gap-4 rounded-sm h-full w-s justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="hidden md:flex flex-col justify-between gap-4">
      <div className="w-72 flex-1 bg-background/30 backdrop-blur-md">
      <Sidebar/>
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-36 p-2"> <Captador/>
  </div>
    </div>
    <div className="bg-background/30 backdrop-blur-md flex-1">
      <div className="h-full w-full flex justify-center items-center">
    
      <div className="absolute inset-0 -z-10">
         
         <SceneRoom> 
          <Room/>
         </SceneRoom>
      </div>
    </div>
    </div>
    <div className="hidden md:flex bg-background/30 backdrop-blur-md p-2">
   < MusicsListPage/>
    </div>
  </main>
  );
}
export default Game