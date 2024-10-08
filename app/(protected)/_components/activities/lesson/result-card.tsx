import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  value: number;
  variant: "points" | "hearts";
};

export const ResultCard = ({
  value,
  variant,
} : Props) => {
  const imageSrc = variant === "hearts" ? "/img/icons/heart.svg" : "/img/icons/XP.svg";
  return (
    <div className={cn(
      "rounded-2xl border-2 w-full",
      variant === "points" && "bg-orange-500 border-orange-500",
      variant === "hearts" && "bg-rose-500 border-rose-500",
    )}>

    <div className={cn(
      "p-1.5 text-foreground rounded-t-xl font-bold text-center uppercase text-xs",
      variant === "points" && "bg-orange-500",
      variant === "hearts" && "bg-rose-500",
    )}>
      {variant === "hearts" ? "Hearts Left" : "Total XP"}
     
    </div>
    <div className={cn(
      "rounded-2xl bg-foreground items-center flex justify-center p-6 font-bold text-lg",
       variant === "points" && "text-rose-500",
       variant === "hearts" && "text-orange-500",
    )}>
    <Image
    src={imageSrc}
    alt="Icon"
    height={40}
    width={40}
    className="mr-1.5"
    />
    {value}
    </div>
    </div>
  )
}