

import { Card } from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/progress";
import YouTube from "react-youtube";
import { MusicList } from "./music/music-list";
import { getSimilarMusics } from "@/actions/get-musics";
import React from "react";
import { toast } from "sonner";
import { Promo } from "../activities/shop/promo";
import { Toaster } from "@/components/ui/sonner";

interface SideBarProps {
  youtubeLink: string;
  onPlayerReady: (event: any) => void;
  onPlayerPlay?: (event: any) => void;  // Torna `onPlayerPlay` opcional
  musicName: string;
  artist: string;
  progress: number;
  userSubscription: {
    isActive: boolean;
  } | null;
  musicRecomend: {
    title: string;
    id: number;
    artist: string;
    ProgressGameMusic: {
        percentage: number;
    }[];
    coverAlbum: string;
  }[];
}

const SideBar: React.FC<SideBarProps> = ({
  onPlayerPlay,
  onPlayerReady,
  youtubeLink,
  musicName,
  artist,
  progress,
  musicRecomend,
  userSubscription,
}) => {
  const isPro = !!userSubscription?.isActive;
  const toastDisplayed = React.useRef(false); // Variável para evitar duplicação

  // Mostrar o toaster ao carregar a página
  React.useEffect(() => {
    if (!isPro && !toastDisplayed.current) {
      toastDisplayed.current = true; // Marca o toast como exibido
      toast(<Promo />, { duration: 5000, position: "bottom-right" });
    }
  }, [isPro]);

  const handleVideoEnd = () => {
    toast(<Promo />, { duration: 5000, position: "bottom-right" });
  };

  return (
    <Card className="p-4 items-center hidden xl:block max-h-[calc(93vh-40px)] overflow-y-auto w-[420px] h-[93vh] relative scrollbar-none shadow-none border-2 border-muted-foreground">
      <Toaster />
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
          onEnd={handleVideoEnd}
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
          <div className="ml-auto mt-2"></div>
          <h2 className="text-xs text-muted-foreground">Total Score</h2>
        </div>
      </div>
      <MusicList items={[...musicRecomend]} />
    </Card>
  );
};

export default SideBar;