"use client"

import Captador from "@/app/(protected)/_components/pickup/pickup";
import Scoreboard from "@/app/(protected)/_components/scoreboard/list";
import { ScaleLoader } from "react-spinners";
import  MusicsListPage  from "@/app/(protected)/_components/music/list";
import dynamic from "next/dynamic";


const Scene = dynamic(() => import('@/components/Guitar/scene'), {
  ssr: false
})

 const Game = () => {
 
  return (
    <main className="p-4 flex gap-4 rounded-sm h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="grid grid-rows-2 gap-4">
      <div className="w-60 bg-background/30 backdrop-blur-md">
        <Scoreboard/>
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-36 p-2"> <Captador/>
  </div>
    </div>
    <div className="bg-background/30 backdrop-blur-md flex-1">
      <div className="h-full w-full flex justify-center items-center">
    
    
    <Scene/>
    </div>
    </div>
    <div className="bg-background/30 backdrop-blur-md justify-self-start flex flex-col items-center p-2">
   < MusicsListPage/>
    </div>
  </main>
  );
}
export default Game