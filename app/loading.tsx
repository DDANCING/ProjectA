import { Card } from "@/components/ui/card";
import { ScaleLoader } from "react-spinners";

export default function Loading () {
  return ( 
    <div className="flex w-full h-full justify-center items-center animate-pulse bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background"> 
       <Card className="p-6">
        <ScaleLoader color="#fff" />
        </Card>
       </div>
   );
}
 
