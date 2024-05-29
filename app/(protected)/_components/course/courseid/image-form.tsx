"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {  FilePlus2, ImagePlus, ImageUp, Images } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useRouter } from "next/navigation";


import { Course } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/ui/file-upload";

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
 imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

export const ImageForm = ({
  initialData,
  courseId
}: ImageFormProps ) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();


const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    await axios.patch(`/api/courses/${courseId}`, values);
  toast("Saved!", {
        
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
        Image
        <Button onClick={toggleEdit} className="gap-2" variant={"outline"}>
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !initialData.imageUrl && (
            <>
            <FilePlus2 />
            Add
            </>
          )}
          {!isEditing && initialData.imageUrl && (
       <>
        <Images />
        Edit
        </>
          )}
        </Button>
      </div>
      {!isEditing && (
       !initialData.imageUrl ? (
        <div className="flex m-2  items-center justify-center h-60 bg-muted/80 rounded-md ">
           
           <ImageUp />

        </div>
       ) : (
        <div className="relative aspect-video mt-2">
     <Image
     fill
     src={initialData.imageUrl}
     alt={initialData.title}
     />
        </div>
       )
      )}
      {isEditing && (  
        <div>
          <FileUpload
          endpoint="courseImage"
          onChange={(url) => {
            if (url) {
              onSubmit({ imageUrl: url });
            }
          } }
          />
          <div className="text-xs text-center text-muted-foreground mt-4">
             16:9 aspect ratio recommended
          </div>
        </div>
      )}
    </div>
  )
}