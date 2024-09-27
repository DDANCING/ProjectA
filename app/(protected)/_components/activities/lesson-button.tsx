"use client";

import { Check, Crown, Star } from "lucide-react";
import { CircularProgress } from "@nextui-org/progress";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@nextui-org/theme";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({
  id,
  index,
  percentage,
  totalCount,
  current,
  locked,
}: Props) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  let indentationLevel;

  if (cycleIndex <= 2) {
    indentationLevel = cycleIndex;
  } else if (cycleIndex <= 4) {
    indentationLevel = 4 - cycleIndex;
  } else if (cycleIndex <= 6) {
    indentationLevel = 4 - cycleIndex;
  } else {
    indentationLevel = cycleIndex - 8;
  }

  const rightPosition = indentationLevel * 40;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? Crown : Star;

  const href = isCompleted ? `/activities/lesson/${id}` : "/activities/lesson";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current ? (
          <div className="h-[102px] w-[102px] relative flex items-center justify-center">
            <div className="absolute -top-6 left-2.5 px-3 py-2.5 border-2 font-bold uppercase text-primary bg-foreground rounded-xl animate-bounce tracking-wide z-10">
              start
              <div
                className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"
              />
            </div>
            <CircularProgress
              classNames={{
                svg: "w-[102px] h-[102px] drop-shadow-md",
                indicator: "stroke-primary",
                track: "stroke-foreground/30",
                value: "text-3xl font-semibold text-white",
              }}
              value={Number.isNaN(percentage) ? 0 : percentage}
              strokeWidth={2}
            />
             
            <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant={locked ? "locked" : "default"}
                  className="rounded-full h-[70px] w-[70px] border-b-4 border-background/40 flex items-center justify-center"
                >
                  <Icon
                    className={cn(
                      "h-10 w-10",
                      locked
                        ? "fill-muted-foreground text-muted-foreground stroke-muted-foreground"
                        : "fill-primary-foreground text-primary-foreground",
                      isCompleted && "fill-none stroke-[4]"
                    )}
                  />
                </Button>
              </div>
          </div>
        ) : (
          <div className="h-[102px] w-[102px] flex items-center justify-center">
             <Button
                  variant={locked ? "locked" : "default"}
                  className="rounded-full h-[70px] w-[70px] border-b-4 border-background/40 flex items-center justify-center"
                >
                  <Icon
                    className={cn(
                      "h-10 w-10",
                      locked
                        ? "fill-muted text-muted-foreground stroke-secondary "
                        : "fill-primary-foreground text-primary-foreground",
                      isCompleted && "fill-none stroke-[4]"
                    )}
                  />
                </Button>
          </div>
        )}
      </div>
    </Link>
  );
};
