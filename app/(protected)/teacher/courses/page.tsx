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
    
      
    
    
  
     <Card className=" p-6 w-full rounded shadow-none bg-background/40">
     <DataTable columns={columns} data={courses} />
      </Card>
      
   
   );
}
 
export default CoursesPage;