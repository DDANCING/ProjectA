import { ChapterAccessForm } from "@/app/(protected)/_components/course/chapterid/chapter-access-form";
import { ChapterActions } from "@/app/(protected)/_components/course/chapterid/chapter-actions";
import { ChapterDescriptionForm } from "@/app/(protected)/_components/course/chapterid/chapter-description-form";
import { ChapterTitleForm } from "@/app/(protected)/_components/course/chapterid/chapter-title-form";
import { ChapterVideoForm } from "@/app/(protected)/_components/course/chapterid/chapter-video-form";
import { auth } from "@/auth";
import { Banner } from "@/components/banner";
import { IconBadge } from "@/components/icon-badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { db } from "@/lib/db";
import { ArrowBigLeft, FileVideo, LayoutPanelTop, View } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";


const ChapterIdPage = async ({
  params
 } : {
  params: {courseId: string; chapterId: string }
 }
) => {
  const user = await auth();

  if (!user?.user.id) {
    return redirect("/dashboard")
  }
  
  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId
    },
    include: {
      muxData: true,
    },
  });

  if (!chapter) {
    return redirect("/dashboard")
  }

  const requiredFields = [
    chapter.title,
    chapter.description,
    chapter.videoUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);


  return ( 
    <>
    {!chapter.isPublished && (
      <Banner
      variant="warning"
      label="The chapter has not been published and is not visible in the course."
      />
    )}
  <div className="min-w-[300px] p-6 ">
   
   <div className="flex items-center justify-between">
    <div className="w-full">
     <Link 
     href={`/teacher/courses/${params.courseId}`}
     className="flex items-center text-muted-foreground text-sm hover:opacity-75 transition mb-6"
     >
      <ArrowBigLeft
      className="h-4 w-4 mr-2"
      />
      Back to course setup
     </Link> 
     <Card className="flex-1  justify-between w-full">
      <div className="flex flex-col">
         <CardHeader className=" flex flex-row justify-between">
          <div className="flex flex-col text-2xl font-medium">
            Chapter Creation
            <span className="text-sm text-muted-foreground">
            Completed fields {completionText}
            </span>
            </div>
            <div className="flex">
            <ChapterActions
         disabled={!isComplete}
         courseId={params.courseId}
         chapterId={params.chapterId}
         isPublished={chapter.isPublished}
         />
         </div>
         </CardHeader> 
         
      
      <CardContent className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
         <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutPanelTop}/>
            <h2 className="text-xl">
              Customize your chapter
            </h2>
          </div>
          <ChapterTitleForm 
          initialData={chapter}
          courseId={params.courseId}
          chapterId={params.chapterId}
          /> 
           <ChapterDescriptionForm
           initialData={chapter}
           courseId={params.courseId}
           chapterId={params.chapterId}
          />
         </div>
         <div>
         <div className="flex items-center gap-x-2">
            <IconBadge icon={View}/>
            <h2 className="text-xl">
              Access Settings
            </h2>
         </div>
         <ChapterAccessForm
         initialData={chapter}
         courseId={params.courseId}
         chapterId={params.chapterId}
         />
         </div>
         <div>
          <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={FileVideo}/>
            <h2 className="text-xl">
              Upload a chapter video
            </h2>
            </div>
            <ChapterVideoForm
            initialData={chapter}
            chapterId={params.chapterId}
            courseId={params.courseId

            }
            />
          </div>
         </div>
      </CardContent>
      </div>

     </Card>
    </div>
   </div>
  </div>
  </>
   );
}
 
export default ChapterIdPage;