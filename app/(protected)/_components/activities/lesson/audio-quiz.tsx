import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import MicRecorder from "mic-recorder";
import { toast } from "sonner";
import { Footer } from "./footer";
import Image from "next/image";
import { Mic2Icon } from "lucide-react";

interface CardQuizProps {
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
  options
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
      } else {
        setStatus("wrong");
        onWrong();
      }
    } catch (error) {
      console.error("Erro na comparação de áudio:", error);
      toast.error("Erro ao processar o áudio.");
    }
  };

  const handleAction = () => {
    console.log("Botão clicado, status atual:", status);

    if (isRecording) {
      console.log("Gravação em andamento...");
      return;
    }

    if (status === "none") {
      console.log("Iniciando processo de gravação...");
      onSelect();
      startRecordingProcess();
    } else if (status === "wrong") {
      console.log("Reiniciando quiz...");
      setStatus("none");
      onSelect();
    } else if (status === "correct") {
      console.log("Avançando para a próxima lição...");
      onContinue(nextLessonId);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      {options.map((option, i) => (
      <>
      <div>
        {option.text}
      </div>
        <Image
        src={option.imageSrc || ""}
        alt="acorde"
        width={80}
        height={80}
        />
      <Card
      
        className={`cursor-pointer text-center w-20 h-20 flex items-center justify-center shadow-none ${
          status === "correct" ? "bg-green-500" : status === "wrong" ? "bg-red-500" : "border"
        }`}
        onClick={handleAction} // Card compartilha a mesma lógica
      >

        {isRecording ? (
          <p>Gravando...</p>
        ) : status === "correct" ? (
          <p>Correto!</p>
        ) : status === "wrong" ? (
          <p>Errado!</p>
        ) : (
          <Mic2Icon/>
        )}
      </Card>
     
      <Footer
        onCheck={handleAction} 
        status={status}
        disabled={isRecording}
        lessonsId={nextLessonId}
      />
      </>
    ))}
    </div>
  );
};

export default CardQuiz;
