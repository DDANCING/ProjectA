
import { MusicCard } from "./music-card";

type MusicWithPerformance = {
  id: number;
  title: string;
  artist: string;
  youtubeLink: string;
  tabs: string;
  coverAlbum: string;
  tuning: string;
  createdAt: Date;
  updatedAt: Date;
  timeMinutes: number;
  timeSeconds: number;
};

interface MusicListProps {
  items: MusicWithPerformance[];
}

export const MusicList = ({
  items
}: MusicListProps) => {
  return (
   <div className="w-full gap-8 p-4 text-wrap text-center flex flex-col">
     {items.map((item) => (
      <MusicCard
      artist={item.artist}
      key={item.id}
      id={item.id}
      title={item.title}
      imageUrl={item.coverAlbum}  // Atualize para coverAlbum ou outra propriedade de imagem
      />
     ))}
    {items.length === 0 && (
      <div className="text-center text-sm text-muted-foreground mt-10">
        No music found
      </div>
    )}
   </div>
  )
}
