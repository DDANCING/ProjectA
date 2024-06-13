import { CircleChevronUp } from "lucide-react";
import { Chapter, Course, UserProgress } from "@prisma/client";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

import { CourseSidebar } from "./course-sidebar";

interface CourseMobileSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
};

export const CourseMobileSidebar = ({ 
  course,
  progressCount,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="absolute top-[95%] left-[50%] md:hidden pr-4 hover:opacity-75 transition">
        <CircleChevronUp  className="animate-bounce"/>
      </SheetTrigger>
      <SheetContent side="bottom" className="p-0 bg-background border-primary w-full">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  )
}