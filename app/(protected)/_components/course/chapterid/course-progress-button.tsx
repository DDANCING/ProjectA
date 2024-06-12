"use client"

import { Button } from "@/components/ui/button";
import axios from "axios";
import { CheckCheck, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface CourseProgressButtonProps {
  chapterId: string;
  courseId: string;
  isCompleted?: boolean;
  nextChapterId?: string;
};

export const CourseProgressButton = ({
  chapterId,
  courseId,
  isCompleted,
  nextChapterId
}: CourseProgressButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoadimg] = useState(false);

  const onClick = async () => {
    try {
      setIsLoadimg(true);

      await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
        isCompleted: !isCompleted
    });

    if (!isCompleted && !nextChapterId) {

    }

    if (!isCompleted && nextChapterId) {
      router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
    }

    toast.success("Progress updated");
    router.refresh();

    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoadimg(false);
    }
  }

  const Icon = isCompleted ? X : CheckCheck
  return (
    <Button
    onClick={onClick}
    disabled={isLoading}
     type="button"
     className="w-full md:w-auto"
     variant={isCompleted ? "outline" : "default"}
    >
      {isCompleted ? "Not completed" : "Mark as complete"}
      <Icon className="h-4 w-4 ml-2"/>
    </Button>
  )
}