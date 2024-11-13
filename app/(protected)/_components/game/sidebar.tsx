import { Card } from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/progress";
import YouTube from "react-youtube";

interface SideBarProps {
  youtubeLink: string;
  onPlayerReady: (event: any) => void;
  onPlayerPlay?: (event: any) => void;  // Torna `onPlayerPlay` opcional
  musicName: string;
  artist: string;
  progress: number;
}

const SideBar: React.FC<SideBarProps> = ({ onPlayerPlay, onPlayerReady, youtubeLink, musicName, artist, progress }) => {
  return (
    <Card className="p-4 items-center hidden xl:block max-h-[calc(91vh-40px)] overflow-y-auto w-[400px] h-[91vh] relative scrollbar-none shadow-none border-2 border-muted-foreground">
      <div style={{ pointerEvents: "none" }}>
        <YouTube
          videoId={youtubeLink}
          opts={{
            height: "168,75",
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
      
      <div className="relative flex justify-center items-center ml-auto">
      <CircularProgress
          classNames={{
            svg: "w-[24vh] h-[24vh] drop-shadow-md",
            indicator: "stroke-primary",
            value: "text-2xl font-semibold text-foreground",
          }}
          value={progress}
          strokeWidth={2}
          showValueLabel={true}
        />
         <div className="absolute flex flex-col items-center justify-center">
        <h1 className="text-xs text-muted-foreground">accuracy</h1>
        <div className="mb-6"></div>
        <div className="ml-auto mt-2"> 
      
      </div>
        <h2 className="text-xs text-muted-foreground">Total Score</h2>
         
        </div>
      </div>
      <div>
      
      </div>
    </Card>
  );
};

export default SideBar;
