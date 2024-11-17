import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import MicRecorder from "mic-recorder";
import Image from "next/image";
import { Mic } from "lucide-react";
import { toast } from "sonner";

interface CardQuizProps {
  title: string;
  options: {
    id: number;
    text: string;
    imageSrc?: string;
    audioSrc?: string;
  }[];
  targetSongId: number;
  recordingDuration: number;
  status: "none" | "correct" | "wrong";
  nextLessonId: number;
  onSelect: () => void;
  onCorrect: () => void;
  onWrong: () => void;
  onContinue: (lessonId: number) => void;
  hearts: number; // Número de corações
  openHeartsModal: () => void; // Função para abrir o modal existente
}

const CardQuiz: React.FC<CardQuizProps> = ({
  targetSongId,
  recordingDuration,
  status: initialStatus,
  nextLessonId,
  onSelect,
  onCorrect,
  onWrong,
  onContinue,
  hearts,
  openHeartsModal,
  options,
  title
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  const startRecordingProcess = async () => {
    const recorder = new MicRecorder({ bitRate: 128, encoder: "wav", sampleRate: 48000 });
    setIsRecording(true);

    try {
      await recorder.start();

      setTimeout(async () => {
        const [buffer, blob] = await recorder.stop().getAudio();
        const file = new File(buffer, `audio.wav`, { type: blob.type });
        setIsRecording(false);
        await uploadAudio(file);
      }, recordingDuration * 1000);
    } catch (error) {
      toast.error("Erro ao gravar áudio.");
      setIsRecording(false);
    }
  };

  const uploadAudio = async (file: File) => {
    const formData = new FormData();
    formData.append("target_song_id", targetSongId.toString());
    formData.append("audio", file);

    try {
      const response = await fetch("/api/compare-audio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar áudio para a API.");
      }

      const result = await response.json();
      const similarity = result.similarity_percentage;

      if (similarity >= 60) {
        setStatus("correct");
        onCorrect();
        toast.success("Percentage: " + similarity);
      } else {
        setStatus("wrong");
        onWrong();
        toast.success("Percentage: " + similarity);
      }
    } catch (error) {
      toast.error("Erro ao processar o áudio.");
    }
  };

  const handleAction = () => {
    if (hearts === 0) {
      openHeartsModal(); // Abre o modal de corações se não houver corações
      return; // Não continua a execução
    }
  
    if (isRecording) {
      return; // Se já estiver gravando, não faz mais nada
    }
    if (status === "none") {
      onSelect();
      startRecordingProcess();
    } else if (status === "wrong") {
  
      setStatus("none");
      onSelect();
    } else if (status === "correct") {
     
      onContinue(nextLessonId);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <div></div>
      {options.map((option, i) => (
        <div key={option.id} className="text-center w-full h-full flex flex-col items-center justify-between m-10">
          <div>
            <h1 className="text-xl text-foreground font-bold">{title}</h1>
          </div>
          <div>
            <h1 className="text-lg text-muted-foreground">{option.text}</h1>
          <Image src={option.imageSrc || ""} alt="acorde" width={80} height={80} />
          </div>
          <div>
          <Card
            className={`cursor-pointer text-center w-20 h-20 flex items-center justify-center shadow-none ${
              status === "correct"
                ? "bg-green-500"
                : status === "wrong"
                ? "bg-red-500"
                : "border"
            }`}
            onClick={handleAction} 
          >
            {isRecording ? (
              <Mic className="animate-pulse" />
            ) : status === "correct" ? (
              <p>Next!</p>
            ) : status === "wrong" ? (
              <p>Retry</p>
            ) : (
              <Mic />
            )}
          </Card>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default CardQuiz;
