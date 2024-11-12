import { Progress } from "@/components/ui/progress";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProgressBarProps {
  progress: number;
  hearts: number;
  hasActiveSubscription: boolean;
  setIsOpen: (open: boolean) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, hearts, hasActiveSubscription, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full bg-background">
        <X
          onClick={handleClick}
          className="text-muted-foreground hover:opacity-75 cursor-pointer transition"
        />
        <Progress value={progress} />
        <div className="text-rose-500 flex items-center font-bold">
          <Image
            src="/img/icons/heart.svg"
            height={28}
            width={28}
            alt="heart"
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-6 w-6 stroke-[3] shrink-0" />
          ) : (
            hearts
          )}
        </div>
      </header>
    </div>
  );
};

export default ProgressBar;
