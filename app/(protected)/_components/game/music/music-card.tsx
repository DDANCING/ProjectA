import { IconBadge } from "@/components/icon-badge";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CourseProgress } from "../../course/progress/course-progress";

interface CourseCardProps {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;

}

export const MusicCard = ({
  id,
  title,
  imageUrl,
  artist,

}: CourseCardProps) => {
  return (
    <Link className="relative flex items-center" href={`/game/${id}`}>
      <div className=" w-72 h-20 rounded-xl overflow-hidden ">
        <Image
          fill
          
          className="object-cover opacity-40 rounded-xl transition-all hover:blur-sm"
          alt={title}
          src={imageUrl}
        >
          
        </Image>
      </div>

      {/* Imagem superior (álbum) */}
      <div className="absolute w-24 h-24 rounded-md overflow-hidden z-10">
        <Image
          width={96}
          height={96}
          className="object-cover"
          alt={title}
          src={imageUrl}
        />
      </div>

      {/* Contêiner de texto sobre a imagem de fundo */}
      <div className="absolute left-28 flex flex-col p-2 z-20">
        <div className="text-white text-lg md:text-base font-medium transition line-clamp-2">
          {title}
        </div>
        <div className="text-gray-300 text-sm">
          {artist}
        </div>
        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
   
        </div>
      
      </div>
    </Link>
  );
};
