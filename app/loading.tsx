import { Card } from "@/components/ui/card";
import PurpleLogo from "@/components/images/Logo";
import { Progress } from "@/components/ui/progress";

export default function Loading () {
  return ( 
    <div className="flex flex-col w-full h-full justify-center items-center animate-pulse bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background"> 
       <Card className="p-6 border-primary shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED]">
       <PurpleLogo/>
        </Card>       
       </div>
   );
}
 
