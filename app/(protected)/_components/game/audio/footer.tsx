import React from "react";
import { Button } from "@/components/ui/button";
import { useMedia } from "react-use";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";
import { Audio } from 'react-loader-spinner'

interface FooterProps {
  isRecording: boolean;
  onStart: () => void;
  status: "correct" | "wrong" | "none" | "completed";
}

const Footer: React.FC<FooterProps> = ({ isRecording, onStart, status }) => {
  const isMobile = useMedia("(max-width: 1024px)");

  return (
    <footer
      className={cn(
        "lg:h-[140px] h-[100px] border-t-2 rounded-lg",
        isRecording 
          ? "bg-muted border-t-2" // Mantém o padrão se estiver gravando
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
          <div className="text-primary font-bold text-base lg:text-2xl">
         <Audio
          height="80"
          width="80"
          color="purple"
        />
            Gravando...
  
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
            <div>
            </div>
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
            ? "Gravando..." 
            : status === "correct"
            ? "Next"
            : status === "wrong"
            ? "Retry"
            : "Iniciar Gravação"}
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
