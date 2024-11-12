import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAudio, useMedia } from "react-use";
import { cn } from "@/lib/utils";
import { CheckCircle, Mic, Pause, Play, XCircle } from "lucide-react";
import { reduceMusicHearts } from "@/actions/get-userProgress";

interface FooterProps {
  isRecording: boolean;
  onStart: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  musicId: number;
  points: number;
}

const Footer: React.FC<FooterProps> = ({ isRecording, onStart, status, musicId, points }) => {
  const isMobile = useMedia("(max-width: 1024px)");
  const [correctAudio, , correctControls] = useAudio({ src: "/correct.wav" });
  const [incorrectAudio, , incorrectControls] = useAudio({ src: "/incorrect.wav" });
  const [startAudio, , startControls] = useAudio({ src: "/drumsticksoundeffect.wav" });
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [countdown, setCountdown] = useState<number | null>(3);

  // Desabilita o botão Play e exibe contagem regressiva ao carregar a página
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev !== null && prev > 1 ? prev - 1 : null));
    }, 1000);

    const enableButtonTimeout = setTimeout(() => {
      setIsDisabled(false);
      setCountdown(null); // Remove a contagem regressiva ao habilitar o botão
    }, 3000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(enableButtonTimeout);
    };
  }, []);

  // Inicia a contagem regressiva e executa a função de início
  const handleClick = () => {
    if (!isDisabled) {
      setCountdown(3);
      setIsDisabled(true);
      startControls.play(); // Toca o som de início

      const countdownInterval = setInterval(() => {
        setCountdown((prev) => (prev !== null && prev > 1 ? prev - 1 : null));
      }, 1000);

      setTimeout(() => {
        clearInterval(countdownInterval);
        setCountdown(null);
        setIsDisabled(false);
        onStart(); // Executa a função passada
      }, 3000);
    }
  };

  useEffect(() => {
    const reduceHearts = async () => {
      if (status === "correct" && !hasPlayed) {
        correctControls.play();
        setHasPlayed(true);
      } else if (status === "wrong" && !hasPlayed) {
        incorrectControls.play();
        setHasPlayed(true);
        await reduceMusicHearts(musicId, points);
        console.log("Coração reduzido");
      } else if (status === "none") {
        setHasPlayed(false);
      }
    };
  
    reduceHearts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, correctControls, incorrectControls, hasPlayed]);

  return (
    <>
      {startAudio}
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
            disabled={isDisabled || isRecording}
            className="ml-auto"
            onClick={handleClick}
            size={isMobile ? "sm" : "lg"}
            variant={status === "wrong" ? "destructive" : "default"}
          >
            {countdown !== null ? countdown : isRecording ? (
              <Pause className="w-5"/>
            ) : status === "correct" ? (
              <Play className="w-5"/>
            ) : status === "wrong" ? (
              "Retry"
            ) : (
              <Play className="w-5"/>
            )}
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
