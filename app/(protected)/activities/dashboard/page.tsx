import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ArrowBigRightDash } from "lucide-react";
import SceneGuitar from "@/components/3Dcomponents/scene-guitar";
import { Guitar } from "@/components/3Dcomponents/guitar/Model";

const dashboardPage = async () => {
  const user = await auth();
  const userId = user?.user.id;


  if (!userId) {
    return redirect("/");
  }


  return ( 
   
   
    <div className="h-full bg-background/30 backdrop-blur-md flex-1 p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
        <Card className="transition-all text-muted-foreground border-primary bg-background/30 backdrop-blur-md  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED]">
         <div className="h-96 p-6 flex flex-col justify-between">
         <div>
          <p> Welcome back, </p>
          <h1 className="text-foreground text-2xl"> Dancing </h1>
          <p>great to see you again!</p>
          </div>
          <div>
          <p  className="flex hover:text-xl hover:text-foreground"> Continue where you left off <ArrowBigRightDash /> </p>
          </div>
         </div>
         <div>
         <div className="absolute inset-0 -z-10">
         
         <SceneGuitar> 
          <Guitar/>
         </SceneGuitar>
      </div>
         </div>
     </Card>
   
     </div>
     <div>
      <Card className="transition-all w-full h-96  bg-background/30 backdrop-blur-md font-bold text-xl hover:text-3xl  border-primary  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED]">
     
     </Card>
     </div>
     
     <div>
     
     </div>
    </div>
    
    </div>

  )
}
 
export default dashboardPage;