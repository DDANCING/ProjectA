
import Captador from "@/components/captor/captor";



export default function Game() {
  return (
    <main className="p-4 flex gap-4 rounded-sm h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="grid grid-rows-2 gap-4">
      <div className="w-60 bg-background/30 backdrop-blur-md">
        
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-32"> <Captador/> </div>
    </div>
    <div className="bg-background/30 backdrop-blur-md  flex-1">
      
    </div>
    <div className="bg-background/30 backdrop-blur-md w-60 justify-self-start flex flex-col items-center p-2">
     
    </div>
  </main>
  );
}
 