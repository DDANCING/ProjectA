"use client";

import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  playbackId: string;
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
};

export const VideoPlayer = ({
  playbackId,
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
}: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
           <Loader2 className="h-8 w-8 animate-spin text-foreground"/>
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted flex-col gap-y-2 text-foreground">
           <Lock className="h-8 w-8 "/>
           <p>
           This chapter is locked.
           </p>
           <p className="text-xs text-muted-foreground">
           Please purchase the course to unlock it.
           </p>
        </div>
      )}
      {!isLocked && (
        <MuxPlayer
        title={title}
        className={cn(
          !isReady && "hidden"
        )}
        onCanPlay={() => setIsReady(true)}
        onEnded={() => {}}
        autoPlay
        playbackId={playbackId}
        />
      )}
    </div>
  )
}