import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";

import { DataTable } from "../../_components/course/courses/data-table";
import { columns } from "../../_components/course/courses/columns";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Card } from "@/components/ui/card";



const CoursesPage =  async () => {
  const user = await auth();

     if(!user?.user.id) {
      return redirect("/dashboard")
     }

     const courses = await db.course.findMany({
      where: {
        userId: user.user.id,
      },
      orderBy: {
        createdAt: "desc",
      }
     })
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
  
     <Card className="p-6 m-6">
     <DataTable columns={columns} data={courses} />
      </Card>
      
    
    </div>
   
  </main>
   
   );
}
 
export default CoursesPage;