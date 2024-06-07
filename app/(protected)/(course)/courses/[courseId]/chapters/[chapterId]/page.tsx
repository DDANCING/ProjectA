import { getChapter } from "@/actions/get-chapter";
import { VideoPlayer } from "@/app/(protected)/_components/course/chapterid/video-player";
import { auth } from "@/auth";
import { Banner } from "@/components/banner";
import { redirect } from "next/navigation";

const ChapterIdPage = async ({ 
 params
}:{
  params: { courseId: string; chapterId: string }}) => {
    const user = await auth();

    if(!user?.user.id) {
     return redirect("/dashboard");
    } 

    const  {
      chapter,
      course,
      muxData,
      activities,
      nextChapter,
      userProgress, 
      purchase,
    } = await getChapter({
      userId: user.user.id,
      chapterId: params.chapterId,
      courseId: params.courseId,
    });

    if(!chapter || !course) {
      return redirect("/dashboard")
    } 

    const isLocked = !chapter.isFree && !purchase;
    const onCompleteOnEnd = !!purchase && !userProgress?.isCompleted;

  return ( 
    <div>
      {userProgress?.isCompleted && (
        <Banner 
        variant="success"
        label="You have already finished this chapter."
        />
      )}
       {isLocked && (
        <Banner 
        variant="warning"
        label="You need to buy this course to access this chapter."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer 
          chapterId={params.chapterId}
          title={chapter.title}
          courseId={params.chapterId}
          nextChapterId={nextChapter?.id}
          playbackId={muxData?.playbackId!}
          isLocked={isLocked}
          completeOnEnd={onCompleteOnEnd}
          />
        </div>
      </div>
    </div>
   );
}
 
export default ChapterIdPage;