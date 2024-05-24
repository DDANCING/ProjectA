import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
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
  
     <div className="p-6">
     <Link href="/teacher/create">
      <Button>
        New Course
      </Button>
     </Link>  
      </div>
      
    
    </div>
   
  </main>
   
   );
}
 
export default CoursesPage;