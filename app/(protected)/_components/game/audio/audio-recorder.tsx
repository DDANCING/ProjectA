"use client";

import { useState, useEffect } from "react";
import MicRecorder from "mic-recorder";
import ProgressBar from "./progressbar";
import Footer from "./footer";
import { Card } from "@/components/ui/card";
import { useAudio } from "react-use";

import SimilarityResultDialog from "./audio-compare-result";
import SideBar from "../sidebar";
import Tablature from "../tablature/tabs";

interface CompareAudioProps {
  targetSongId: number;
  recordingDuration: number;
  musicTitle: string;
  musicArtist: string;
  youtubeLink: string;
  hearts: number;
  userSubscription: {
    isActive: boolean;
  } | null;
}

const CompareAudio: React.FC<CompareAudioProps> = ({
  targetSongId,
  recordingDuration,
  musicArtist,
  musicTitle,
  youtubeLink,
  userSubscription,
  hearts,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<MicRecorder | null>(null);
  const [progress, setProgress] = useState(0);
  const [similarityResult, setSimilarityResult] = useState<string | null>(null);
  const [similarityPercentage, setSimilarityPercentage] = useState<number | null>(null);
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [similarityDetails, setSimilarityDetails] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newRecorder = new MicRecorder({ bitRate: 128, encoder: "wav", sampleRate: 44100 });
      setRecorder(newRecorder);
    }
  }, []);

  const [correctAudio, _c , correctControls] = useAudio({ src: "/correct.wav" });
  const [incorrectAudio, _i, incorrectControls] = useAudio({ src: "/incorrect.wav" });
  const [startAudio, _s, startControls] = useAudio({ src: "/drumsticksoundeffect.wav" });

  const startRecording = async () => {
    if (recorder) {
      await recorder.start();
      setIsRecording(true);
      setLoading(true);
      if (player) {
        player.playVideo();
      }
  
      setTimeout(async () => {
        if (recorder) {
          const [buffer, blob] = await recorder.stop().getAudio();
          const file = new File(buffer, `audio_${Date.now()}.wav`, { type: blob.type });
          setIsRecording(false);
          if (player) player.stopVideo();
          await uploadAudioFile(file); // Aguarde o upload ser concluído
          setProgress(0); // Reseta o progresso após o upload
        }
      }, recordingDuration * 1000);
    }
  };

  const uploadAudioFile = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("target_song_id", targetSongId.toString());
      formData.append("audio", file);
      setDialogOpen(true);
  
      const response = await fetch("/api/compare-audio", {
        method: "POST",
        body: formData,
      });
  
      // Verificação de status de resposta
      if (!response.ok) {
        console.error("Erro na API externa:", response.statusText);
        throw new Error("Erro na comparação de áudio");
      }
  
      const result = await response.json();
  
      // Verifica se a resposta contém o campo esperado
      if (!result.similarity_percentage) {
        console.error("Campo similarity_percentage não encontrado na resposta:", result);
        throw new Error("Resposta inválida da API de comparação de áudio");
      }
  
      setSimilarityDetails(result.details);
      const similarity = result.similarity_percentage;
  
      setSimilarityResult(`Similaridade: ${similarity}%`);
      setSimilarityPercentage(Math.round(similarity * 100) / 100);
      setStatus(similarity < 50 ? "wrong" : "correct");
  
    } catch (error) {
      console.error("Erro no upload:", error);
      alert(`Erro no upload: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  const startRecordingWithDelay = () => {
    startControls.play();
    setTimeout(() => {
      startRecording(); 

      let elapsedTime = 0;
      const interval = setInterval(() => {
        elapsedTime += 1;
        setProgress((elapsedTime / recordingDuration) * 100);
        if (elapsedTime >= recordingDuration) {
          clearInterval(interval);
        }
      }, 1000);

      const newProgress = (elapsedTime / recordingDuration) * 100;
      setProgress(newProgress); 
    }, 3000); 
  };

  const onPlayerReady = (event: any) => {
    setPlayer(event.target);
  };

  const onPlayerPlay = () => {
    startRecordingWithDelay();
  };

  return (
    <>
      {startAudio}
      {incorrectAudio}
      {correctAudio}
      <div className="flex w-full h-full gap-4 justify-between">
      <Card className="h-full flex flex-col shadow-none border-2 border-muted-foreground w-full">
        <ProgressBar
          hasActiveSubscription={!!userSubscription?.isActive}
          hearts={hearts}
          progress={progress} />
        <div className="h-full flex items-center justify-center">
          <div >
            <Tablature
            musicDuration={recordingDuration}
            startPlayback={isRecording}  jsonUrl="https://utfs.io/f/k0NLSQp2ETZAWm6mskSUgxGeTNSdsKkBZwfEqzL9mPX4h70o"/>
          </div>
        </div>
        <Footer 
          onStart={startRecordingWithDelay}
          isRecording={isRecording}
          status={status}
          artist={musicArtist}
          musicName={musicTitle}
        />
      </Card>
      <SideBar
      onPlayerPlay={onPlayerPlay}
      onPlayerReady={onPlayerReady}
      youtubeLink={youtubeLink}
      artist={musicArtist}
      musicName={musicTitle}
      />
      </div>
      <SimilarityResultDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        loading={loading}
        similarityResult={similarityPercentage}
        similarityDetails={similarityDetails}
      />
    </>
  );
};

export default CompareAudio;
