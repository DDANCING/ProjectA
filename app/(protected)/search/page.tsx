import { Sidebar } from "../_components/sidebar/sidebar";

const SeachPage = () => {
  return ( 
    <main className="p-4 flex gap-4 rounded-sm h-full w-s justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="hidden md:flex flex-col justify-between gap-4">
      <div className="w-60 flex-1 bg-background/30 backdrop-blur-md">
      <Sidebar/>
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-36 p-2"> 
  </div>
    </div>
    <div className="bg-background/30 backdrop-blur-md flex-1">
      <div className="h-full w-full flex justify-center items-center">
    
      <div className="absolute inset-0 -z-10">
         
      </div>
    </div>
    </div>
   
  </main>
  );
}
 
export default SeachPage;