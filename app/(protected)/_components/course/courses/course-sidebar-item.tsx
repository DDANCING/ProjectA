"use client"

import { cn } from "@/lib/utils";
import { BadgeCheck, Lock, Play } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


interface CourseSidebarItemProps {
  label: string;
  id: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
}

export const CourseSidebarItem = ({
  label,
  id,
  isCompleted,
  courseId,
  isLocked
}: CourseSidebarItemProps ) => {
  const pathname = usePathname();
  const router = useRouter();

  const Icon = isLocked ? Lock : (isCompleted ? BadgeCheck : Play);
  const isActive = pathname?.includes(id);

  const onClick = () => {
    router.push(`/courses/${courseId}/chapters/${id}`)
  }

  return (
    <button
    onClick={onClick}
    type="button"
    className={cn(
      "flex items-center gap-x-2 text-muted-foreground text-sm pl-2 font-bold transition-all hover:text-foreground hover:bg-muted/20 py-3",
      isActive && "text-primary bg-muted/40 pl-6",
      isCompleted && "text-muted hover:text-emerald-400/50",
      isCompleted && isActive && "text-emerald-400/50"
    )}
    >
      <div className="flex gap-2">
        <Icon 
        size={18}
        className={cn(
          "text-muted-foreground",
          isActive && "text-primary",
          isCompleted && "text-muted hover:text-emerald-400/50"
        )}
        />
        {label}
      </div>
      <div className={cn(
        "ml-auto opacity-0 border-muted-foreground h-full transition-all",
        isActive && "opacity-100",
        isCompleted && "border-emerald-500"
      )}
      
      />
    </button>
  )
}