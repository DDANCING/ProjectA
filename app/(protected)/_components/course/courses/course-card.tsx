import { IconBadge } from "@/components/icon-badge";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl:string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string
};

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category
}: CourseCardProps) => {
  return ( 
    <Link href={`/courses/${id}`}>
    <Card className="group hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED] transition overflow-hidden border-primary p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image
          fill
          className="object-cover"
          alt={title}
          src={imageUrl}
          />
        </div>
        <div className="flex flex-col p-2">
        <div className="text-muted-foreground text-lg md:text-base font-medium group-hover:text-foreground transition line-clamp-2">
          {title}
        </div>
        <p className="text-xs text-muted-foreground">
          {category}
        </p>
        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
        <div className="flex items-center gap-x-1 text-muted-foreground">
            <IconBadge
            size="sm" icon={BookOpen}
            />
            <span>
              {chaptersLength} {chaptersLength === 1 ? "chapter" : "chapters"}
            </span>
        </div>
        </div>
        {progress !== null ? (
          <div>
            TODO
          </div>
        ) : (
          <Badge className="flex justify-center">
        <p className="text-md md:text-sm font-medium text-white">
        {price !== 0 ? (formatPrice(price)) : ("FREE")}
        </p> 
        </Badge>
        )}
        </div>
    </Card>
    </Link>
   );
}
 
