import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAudio, useMedia } from "react-use";
import { cn } from "@/lib/utils";
import { CheckCircle, Mic, Pause, Play, XCircle } from "lucide-react";
import { SyncLoader } from "react-spinners";


interface FooterProps {
  isRecording: boolean;
  onStart: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  musicName: string;
  artist: string;
}

const Footer: React.FC<FooterProps> = ({ isRecording, onStart, status, artist, musicName }) => {
  const isMobile = useMedia("(max-width: 1024px)");
  const [correctAudio, , correctControls] = useAudio({ src: "/correct.wav" });
  const [incorrectAudio, , incorrectControls] = useAudio({ src: "/incorrect.wav" });
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (status === "correct" && !hasPlayed) {
      correctControls.play();
      setHasPlayed(true);
    } else if (status === "wrong" && !hasPlayed) {
      incorrectControls.play();
      setHasPlayed(true);
    } else if (status === "none") {
      setHasPlayed(false); 
    }
  }, [status, correctControls, incorrectControls, hasPlayed]);

  return (
    <>
      {correctAudio}
      {incorrectAudio}
      <footer
        className={cn(
          "lg:h-[140px] h-[100px] border-t-2 rounded-lg",
          isRecording 
            ? "bg-muted border-t-2"
            : status === "correct"
            ? "bg-emerald-100 border-transparent"
            : status === "wrong"
            ? "bg-rose-100 border-transparent"
            : ""
        )}
      >
        <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
          {/* Mensagem no rodapé */}
          {isRecording ? (
            <div className="text-primary font-bold text-base lg:text-2xl flex items-center">
            <Mic  className="h-6 w-6 lg:h-10 mr-4" />
            Listening
          </div>
          ) : status === "correct" ? (
            <div className=" text-emerald-500 font-bold text-base lg:text-2xl flex items-center">
              <CheckCircle className="h-6 w-6 lg:h-10 mr-4" />
              Nicely done!
            </div>
          ) : status === "wrong" ? (
            <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
              <XCircle className="h-6 w-6 lg:h-10 mr-4" />
              Try again.
            </div>
          ) : (
            <div></div>
          )}
          
          <Button
            disabled={isRecording}
            className="ml-auto"
            onClick={onStart}
            size={isMobile ? "sm" : "lg"}
            variant={status === "wrong" ? "destructive" : "default"}
          >
            {isRecording
              ? <Pause className="w-5"/> 
              : status === "correct"
              ? <Play className="w-5"/>
              : status === "wrong"
              ? "Retry"
              : <Play className="w-5"/>}
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
