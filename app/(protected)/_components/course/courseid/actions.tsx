"use client"

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
};

export const Actions = ({
disabled,
courseId,  
isPublished
}: ActionsProps) => {
 const [isLoading, setIsLoading] = useState(false); 
 const router = useRouter();

const onClick = async () => {
  try {
    setIsLoading(true);

    if (isPublished) {
      await axios.patch(`/api/courses/${courseId}/unpublish`);
      toast.success("Course unpublished", {
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      })
    } else {
      await axios.patch(`/api/courses/${courseId}/publish`);
      toast.success("Course published", {
        
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      })
    }
    
    router.refresh();
  } catch  {
    toast.error("something went wrong!", {
        
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      },
    })
  } finally {
    setIsLoading(false);
  }
}

 const onDelete = async () => {
  try {
    setIsLoading(true);

    await axios.delete(`/api/courses/${courseId}`);
    toast.success("Course has ben deleted", {
        
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      },
    })
    router.refresh();
    router.push(`/teacher/courses`);
  } catch {
    toast.error("something went wrong!", {
        
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      },
    })
  } finally {
    setIsLoading(false);
  }
 }

  return (
    <div className="flex items-center gap-x-2 " >
      <Button
      variant="outline"
       onClick={onClick}
       disabled={disabled || isLoading}
       size="sm"
      >
        {isPublished ? "Unpublish" : "Publish" }
      </Button>
      <ConfirmModal 
      onConfirm={onDelete}
      >
      <Button size="sm" variant="ghost" disabled={isLoading} >
      <Trash2 className="w-4 h-4"/>
      </Button>
      </ConfirmModal>

    </div>
  )
}