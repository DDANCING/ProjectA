"use client";

import { useState, useEffect } from "react";
import MicRecorder from "mic-recorder";
import ProgressBar from "./progressbar";
import Footer from "./footer";
import { Card } from "@/components/ui/card";
import { useAudio } from "react-use";
import YouTube from "react-youtube";

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
  const [similarityPercentage, setSimilarityPercentage] = useState<number | null>(null); // Adicionado estado para a porcentagem de similaridade
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newRecorder = new MicRecorder({ bitRate: 128, encoder: "wav", sampleRate: 44100 });
      setRecorder(newRecorder);
    }
  }, []);

  const [correctAudio, , correctControls] = useAudio({ src: "/correct.wav" });
  const [incorrectAudio, , incorrectControls] = useAudio({ src: "/incorrect.wav" });

  const startRecording = async () => {
    if (recorder) {
      await recorder.start();
      setIsRecording(true);
      // Inicia o vídeo aqui, para garantir que tudo comece junto
      if (player) {
        player.playVideo(); // Inicia o vídeo
      }

      let elapsedTime = 0;
      const interval = setInterval(() => {
        elapsedTime += 1;
        setProgress((elapsedTime / recordingDuration) * 100);
        if (elapsedTime >= recordingDuration) {
          clearInterval(interval);
        }
      }, 1000);

      setTimeout(async () => {
        if (recorder) {
          const [buffer, blob] = await recorder.stop().getAudio();
          const file = new File(buffer, `audio_${Date.now()}.wav`, { type: blob.type });
          setIsRecording(false);
          if (player) player.stopVideo(); // Para o vídeo
          await uploadAudioFile(file);
        }
      }, recordingDuration * 1000);
    }
  };

  const uploadAudioFile = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("target_song_id", targetSongId.toString());
      formData.append("audio", file);

      const response = await fetch("/api/compare-audio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Erro na comparação de áudio");

      const result = await response.json();
      const similarity = result.similarity_percentage; // Armazena a porcentagem de similaridade
      const songName = result.song_name;

      setSimilarityResult(`Similaridade: ${similarity}% com a música: ${songName}`);
      setSimilarityPercentage(similarity); // Atualiza o estado da porcentagem de similaridade

      // Atualiza o status com base na similaridade
      setStatus(similarity < 50 ? "wrong" : "correct");
    } catch (error) {
      console.error("Erro no upload:", error);
      alert(`Erro no upload: ${error}`);
    }
  };

  const onPlayerReady = (event: any) => {
    setPlayer(event.target); // Define o player do YouTube
  };

  const onPlayerPlay = () => {
    // Sincroniza a gravação com a reprodução do vídeo
    startRecording();
  };

  return (
    <>
      {incorrectAudio}
      {correctAudio}
      <Card className="h-full flex flex-col">
        <ProgressBar
          hasActiveSubscription={!!userSubscription?.isActive}
          hearts={hearts}
          progress={progress} />
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-2xl text-center lg:text-start font-bold text-muted-foreground">
              {musicTitle} - {musicArtist}
            </h1>
            <div>
              <YouTube
                videoId={youtubeLink}
                opts={{
                  height: "200",
                  width: "400",
                  playerVars: {
                    autoplay: 0,
                    controls: 0,
                    rel: 0,
                  },
                }}
                onReady={onPlayerReady}
                onPlay={onPlayerPlay} // Chama startRecording quando o vídeo começa a tocar
              />
            </div>
          </div>
        </div>
        <Footer
          percentage={similarityPercentage || 0} // Passa a porcentagem de similaridade para o footer
          onStart={startRecording}
          isRecording={isRecording}
          similarityResult={similarityResult}
          status={status}
        />
      </Card>
    </>
  );
};

export default CompareAudio;
