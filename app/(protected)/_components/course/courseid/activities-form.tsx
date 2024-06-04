"use client";

import * as z from "zod";
import axios from "axios";


import { Button } from "@/components/ui/button";
import {  FileMusic, FileMusicIcon, ImagePlus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useRouter } from "next/navigation";


import { Activitie, Course } from "@prisma/client";

import { FileUpload } from "@/components/ui/file-upload";
import { ScaleLoader } from "react-spinners";

interface ActivitiesFormProps {
  initialData: Course & { activities : Activitie[] };
  courseId: string;
}

const formSchema = z.object({
 url: z.string().min(1),
});

export const ActivitiesForm = ({
  initialData,
  courseId
}: ActivitiesFormProps ) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();


const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    await axios.post(`/api/courses/${courseId}/activities`, values);
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
  })}
};
const onDelete = async (id: string) => {
  try{
  setDeletingId(id);
  await axios.delete(`/api/courses/${courseId}/activities/${id}`)
  toast("Activitie has ben delete!", {
        
    action: {
      label: "Close",
      onClick: () => console.log("Undo"),
    },
  })
  router.refresh();
  } catch  { 
    toast("something went wrong!", {
        
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      },
    })
  } finally {
    setDeletingId(null);
  }
  }

  return (
    <div className="mt-6 border bg-muted-foreground/20 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
      Resources and Activities
        <Button onClick={toggleEdit} className="gap-2 mb-3" variant={"outline"}>
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && (
            <>
            <FileMusic />
            Add a file
            </>
          )}
          
        </Button>
      </div>
      {!isEditing && (
       <>
        {initialData.activities.length === 0 && (
          <p className="text-sm mt-2 text-muted-foreground">
            No Activities 
          </p>
        )}
        {initialData.activities.length > 0 && (
          <div className="space-y-2">
            {initialData.activities.map((activitie) => (
              <div
              key={activitie.id}
              className="flex items-center p-3 w-full bg-primary/15
              border border-primary  rounded-md"
              >
              <FileMusicIcon className="flex-shrink-0"/>
              <p className="text-xs line-clamp-1">
                {activitie.name}
              </p>
              {deletingId === activitie.id && (
                <div>
                  <ScaleLoader color="#6D28D9"/>
                </div>
              )}
              {deletingId !== activitie.id && (
                <button 
                onClick={() => onDelete(activitie.id)}
                className="ml-auto hover:opacity-30"
                >
                  <Trash2 />
                </button>
              )}
              </div>
            )
            )}
          </div>
        )}
       </>
       )}
      {isEditing && (  
        <div>
          <FileUpload
          endpoint="courseAttachment"
          onChange={(url) => {
            if (url) {
              onSubmit({ url: url });
            }
          } }
          />
          <div className="text-xs text-center text-muted-foreground mt-4">
            add activities, content or utility 
          </div>
        </div>
      )}
    </div>
  )
}