import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  activeCourse: { imageSrc: string; title: string; } //TODO: MUDAR COM O BANCO DE DAODS DEPOIS
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({ 
   activeCourse,
   points,
   hearts,
   hasActiveSubscription
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
     <Link href="/activities" >
     <Button variant="ghost" className="rounded-lg w-full">
      <Image
      src={activeCourse.imageSrc}
      alt={activeCourse.title}
      
      width={40}
      height={40}
      />
     </Button>
     </Link>
     <Link href="/shop">
     <Button variant="ghost" className="rounded-lg w-full">
       <Image src="/img/icons/XP.svg" height={28} width={28} alt="Points" className="mr-2"/>
       {points}
     </Button>
     </Link>
     <Link href="/shop">
     <Button variant="ghost" className="rounded-lg w-full">
       <Image src="/img/icons/heart.svg" height={22} width={22} alt="heart" className="mr-2"/>
       {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]"/> : hearts}
     </Button>
     </Link>
    </div>
  );
}