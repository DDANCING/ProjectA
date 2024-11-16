"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

interface CourseEnrollButtonProps {
  courseId: string;
}

export const CourseEnrollButton = ({
  courseId
}: CourseEnrollButtonProps ) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try{
      setIsLoading(true);

      const response = await axios.post(`/api/courses/${courseId}/checkout`)

      window.location.assign(response.data.url);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button 
    onClick={onClick}
    disabled={isLoading}
    className="w-36 font-bold text-xl text-white hover:animate-bounce"
    >
      Enroll
    </Button>
  )
}