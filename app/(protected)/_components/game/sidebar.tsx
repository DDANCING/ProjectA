import { Card } from "@/components/ui/card";
import YouTube from "react-youtube";

interface SideBarProps {
  youtubeLink: string;
  onPlayerReady: (event: any) => void;
  onPlayerPlay?: (event: any) => void;  // Torna `onPlayerPlay` opcional
  musicName: string;
  artist: string;
}

const SideBar: React.FC<SideBarProps> = ({ onPlayerPlay, onPlayerReady, youtubeLink, musicName, artist }) => {
  return (
    <Card className="p-4 items-center hidden xl:block w-[368px] stick self-end bottom-6 max-h-[calc(94vh-40px)] overflow-y-auto h-[90vh] relative top-0 pb-10 scrollbar-none shadow-none border-2 border-muted-foreground">
      <div style={{ pointerEvents: "none" }}>
        <YouTube
          videoId={youtubeLink}
          opts={{
            height: "150",
            width: "300",
            playerVars: {
              autoplay: 0,
              controls: 0,
              rel: 0,
              Pause: 0,
            },
          }}
          onReady={onPlayerReady}
          onPlay={onPlayerPlay}
        />
        <h1 className="font-bold text-xl"> {musicName} </h1>
        <h1 className="text-muted-foreground"> {artist} </h1>
      </div>
    </Card>
  );
};

export default SideBar;
