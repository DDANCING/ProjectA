
import { ActivitiesForm } from "@/app/(protected)/_components/course/courseid/activities-form";
import { CategoryForm } from "@/app/(protected)/_components/course/courseid/category-form";
import { DescriptionForm } from "@/app/(protected)/_components/course/courseid/description-form";
import { ImageForm } from "@/app/(protected)/_components/course/courseid/image-form";
import { PriceForm } from "@/app/(protected)/_components/course/courseid/price-form";
import { TitleForm } from "@/app/(protected)/_components/course/courseid/title-form";
import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";
import { auth } from "@/auth";
import { IconBadge } from "@/components/icon-badge";


import { db } from "@/lib/db";
import { BadgeDollarSign, FileMusic, LayoutPanelTop, ListTodo } from "lucide-react";
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
      },
      include: {
      activities: {
          orderBy: {
           createdAt: "desc",
          },
        },
      },
    });

    const categories = await db.category.findMany({
      orderBy: {
        name: "asc",
      },
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
    <div className=" p-6 bg-background/70 backdrop-blur-md flex-1 box-content">
     <div className="flex box-content items-center justify-between">
      <div className="flex flex-col gap-y-2">
       <h1 className="text-3xl font-medium"> Course setup </h1>
       <span className="text-sm text-muted-foreground">
        Complete fields {completionText}
       </span>
     </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mt-16 ">
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
       <DescriptionForm
       initialData={course}
       courseId={course.id}
     />
     <ImageForm
       initialData={course}
       courseId={course.id}
     />
     <CategoryForm
      initialData={course}
      courseId={course.id}
      options={categories.map((category) => ({
       label: category.name,
        value: category.id,
         }))}
      />

     </div>
     <div className="space-y-6">
      <div>
        <div className="flex items-center gap-x-2">
          <IconBadge
          icon={ListTodo}
          />
          <h2 className="text-xl">
            Chapters
          </h2>
        </div>
        <div>
          TODO: chapters
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-2">
          <IconBadge 
          icon={BadgeDollarSign}
          />
          <h2 className=" text-xl">
            Sell your course
          </h2>
        </div>
        <PriceForm
        initialData={course}
        courseId={course.id}
        />
      </div>
      <div>
      <div className="flex items-center gap-x-2">
          <IconBadge 
          icon={FileMusic }
          />
          <h2 className=" text-xl">
          Resources and Activities
          </h2>
        </div>
        <ActivitiesForm
       initialData={course}
       courseId={course.id}
     />
      </div>
     </div>
    </div>
   
  </main>
   );
}
 
export default CourseIdPage;