"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import MicRecorder from "mic-recorder";
import Image from "next/image";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import { compareAudio } from "@/actions/compare-audio";

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
  title,
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
        await handleAudioUpload(file);
      }, recordingDuration * 1000);
    } catch (error) {
      toast.error("Erro ao gravar áudio.");
      setIsRecording(false);
    }
  };

  const handleAudioUpload = async (file: File) => {
    try {
      const result = await compareAudio(targetSongId.toString(), file);
      const similarity = result.similarity_percentage;

      if (similarity >= 60) {
        setStatus("correct");
        onCorrect();
        toast.success(`Similitude: ${similarity.toFixed(2)}%`);
      } else {
        setStatus("wrong");
        onWrong();
        toast.error(`Similitude: ${similarity.toFixed(2)}%. Tente novamente!`);
      }
    } catch (error) {
      toast.error(error + "Erro ao processar o áudio.");
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
      <div>
        <h1 className="text-xl text-foreground font-bold">{title}</h1>
      </div>
      {options.map((option) => (
        <div
          key={option.id}
          className="text-center w-full flex flex-col items-center justify-between m-6"
        >
          <div>
            <h2 className="text-lg text-muted-foreground">{option.text}</h2>
          </div>
          
          {option.imageSrc && (
            <Image
              src={option.imageSrc}
              
              alt="Representação do acorde"
              width={180}
              height={180}

              className="mb-4"
            />
          )}
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
      ))}
      <div/>
    </div>
    
  );
};

export default CardQuiz;
