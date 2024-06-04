"use client";

import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {  Clapperboard, FileVideo, Video } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import MuxPlayer from "@mux/mux-player-react";

import { useRouter } from "next/navigation";


import { Chapter, MuxData } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/ui/file-upload";

interface ChapterVideoFormProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
};

const formSchema = z.object({
 videoUrl: z.string().min(1),
});

export const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormProps ) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();


const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
  toast("Chapter updated", {
        
    action: {
      label: "Close",
      onClick: () => console.log("Undo"),
    },
  })
  toggleEdit();
  router.refresh();
} catch {
  toast("something went wrong!", {
        
    action: {
      label: "Close",
      onClick: () => console.log("Undo"),
    },
  })
}
}

  return (
    <div className="mt-6 border bg-muted-foreground/20 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Video
        <Button onClick={toggleEdit} className="gap-2" variant={"outline"}>
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !initialData.videoUrl && (
            <>
            <Video />
            Add
            </>
          )}
          {!isEditing && initialData.videoUrl && (
       <>
        <Clapperboard />
        Edit
        </>
          )}
        </Button>
      </div>
      {!isEditing && (
       !initialData.videoUrl ? (
        <div className="flex m-2  items-center justify-center h-60 bg-muted/80 rounded-md ">
           
           <FileVideo />

        </div>
       ) : (
        <div className="relative aspect-video mt-2">
       <MuxPlayer
       playbackId={initialData?.muxData?.playbackId || ""}
       />
        </div>
       )
      )}
      {isEditing && (  
        <div>
          <FileUpload
          endpoint="chapterVideo"
          onChange={(url) => {
            if (url) {
              onSubmit({ videoUrl: url });
            }
          } }
          />
          <div className="text-xs text-center text-muted-foreground mt-4">
             Upload Chapter video
          </div>
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
          Videos can take a few minutes to process. Refresh the page if video does not appear.
        </div>
      )}
    </div>
  )
}