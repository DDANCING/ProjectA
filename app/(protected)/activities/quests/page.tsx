import Image from "next/image";
import { redirect } from "next/navigation";

import { UserProgress } from "../../_components/activities/user-progress";

import { Progress } from "@/components/ui/progress";



const QuestsPage = async () => {


  return ( 
    <div className="flex flex-row-reverse gap-[48px] px-6">
    
        
        <div className="w-full flex flex-col items-center">
          <Image
            src="/quests.svg"
            alt="Quests"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Quests
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Complete quests by earning points.
          </p>
          <ul className="w-full">
            
             
          </ul>
        </div>
     
    </div>
  );
};
 
export default QuestsPage;