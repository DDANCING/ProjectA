import { TitleForm } from "@/app/(protected)/_components/course/courseid/title-form";
import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";
import { auth } from "@/auth";
import { IconBadge } from "@/components/icon-badge";


import { db } from "@/lib/db";
import { LayoutPanelTop } from "lucide-react";
import { redirect } from "next/navigation";



const CourseIdPage = async ({
  params
 }: {
    params: { courseid: string }
  }) => {
     const user = await auth();

    if (!user?.user.id) {
      return redirect("/dashboard"); 
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseid
      }
    });
    if (!course) {
    return  redirect("/dashboard"); 
    
    }

    const requiredFields = [
      course.title,
      course.description,
      course.imageUrl,
      course.price,
      course.categoryId
    ];

    const totalField = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;

    const completionText = `(${completedFields}/${totalField})`

  return ( 
    <main className="p-4 flex gap-4 rounded-sm h-full w-s justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
    <div className="hidden md:flex flex-col justify-between gap-4">
      <div className="w-60 flex-1 bg-background/30 backdrop-blur-md">
      <Sidebar/>
      </div>
      <div className="bg-background/30 backdrop-blur-xl h-36 p-2"> 
  </div>
    </div>
    <div className=" p-6 bg-background/70 backdrop-blur-md flex-1">
     <div className="flex w-full items-center justify-between">
      <div className="flex flex-col gap-y-2">
       <h1 className="text-3xl font-medium"> Course setup </h1>
       <span className="text-sm text-muted-foreground">
        Complete fields {completionText}
       </span>
     </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
     <div className="flex items-center gap-x-2">
      <IconBadge icon={LayoutPanelTop}/>
      <h2 className="text-xl">
        Course settings
      </h2>
     </div>
     <TitleForm
       initialData={course}
       courseId={course.id}
     />
     </div>
    </div>
   
  </main>
   );
}
 
export default CourseIdPage;