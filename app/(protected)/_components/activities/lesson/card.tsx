import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react";
import { useAudio, useKey } from "react-use";

type Props = {
  id: number;
  imageSrc?: string | null;
  audioSrc?: string | null;
  text: string;
  shortcut: string;
  selected?: boolean; // Altere para selected
  onClick: () => void;
  disabled?: boolean;
  status?: "correct" | "wrong" | "none";
  type: string;
}

export const Card = ({
  id,
  imageSrc,
  audioSrc,
  text,
  shortcut,
  selected, 
  onClick,
  disabled,
  status,
  type,
}: Props) => {
  const [
    correctAudio,
    _c,
    correctControls,
  ] = useAudio({src: "/correct.wav"});
  const [
    incorrectAudio,
    _i,
    incorrectControls,
  ] = useAudio({src: "/incorrect.wav"});
  const [audio, _, controls] = useAudio({src: audioSrc || ""});

  const handleClick = useCallback(() => {
     if (disabled) return;
     
     controls.play();
     onClick();
  }, [disabled, onClick, controls]);
 
  useKey(shortcut, handleClick, {}, [handleClick]);

  return (
    <div
     onClick={handleClick}
     className={cn(
      "h-full border-2 rounded-xl border-b-4 hover:bg-foreground/5 p-4 lg:p-6 cursor-pointer",
      selected && "border-primary bg-primary/20 ",
      selected && status === "correct" && "border-emerald-400 bg-emerald-400/20 hover:bg-emerald-400/20",
      selected && status === "wrong" && "border-rose-300 bg-rose-300/20 hover:bg-rose-300/20",
      disabled && "pointer-events-none hover:bg-secondary",
      type === "ASSIST" && "lg:p-3 w-full"
     )}
    > 
      {audio}
      {imageSrc && (
        <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
          <Image
          src={imageSrc} fill alt={text}
          />
        </div>
      )}
      <div className={cn(
        "flex items-center justify-between",
        type === "ASSIST" && "flex-row-reverse",
      )}>
        {type === "ASSIST" && <div />}
        <p className={cn(
          " text-sm lg:text-base",
          selected && "text-primary",
          selected && status === "correct" && "text-emerald-400",
          selected && status === "correct" && "text-rose-500",
        )}>
          {text}
        </p>
        <div className={cn(
          "lg:w-[30px] lg:h-[30px] w-[20px] border-2 flex items-center justify-center rounded-lg text-muted-foreground lg:text-[15px] text-xs font-semibold",
          selected && "border-primary text-primary",
          selected && status === "correct" && "border-emerald-500 text-green-500",
          selected && status === "wrong" && "border-rose-500 text-rose-500",
        )}>
          {shortcut}
        </div>
      </div>
    </div>
  )
}
