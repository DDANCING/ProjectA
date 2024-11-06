"use client";

import { useState, useEffect } from "react";
import MicRecorder from "mic-recorder";
import ProgressBar from "./progressbar";
import Footer from "./footer";
import { Card } from "@/components/ui/card";
import { useAudio } from "react-use";
import YouTube from "react-youtube";
import SimilarityResultDialog from "./audio-compare-result";

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
          if (player) player.stopVideo();
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
      setDialogOpen(true);
      const response = await fetch("/api/compare-audio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Erro na comparação de áudio");

      const result = await response.json();
      setSimilarityDetails(result.details);
      const similarity = result.similarity_percentage;
      const songName = result.song_name;

      setSimilarityResult(`Similaridade: ${similarity}% com a música: ${songName}`);
      setSimilarityPercentage(similarity);

      setStatus(similarity < 50 ? "wrong" : "correct");
    } catch (error) {
      console.error("Erro no upload:", error);
      alert(`Erro no upload: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const onPlayerReady = (event: any) => {
    setPlayer(event.target);
  };

  const onPlayerPlay = () => {
    startRecording();
  };

  return (
    <>
      {incorrectAudio}
      {correctAudio}
      <Card className="h-full flex flex-col shadow-none border-2 border-muted-foreground">
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
                onPlay={onPlayerPlay}
              />
            </div>
          </div>
        </div>
        <Footer 
          onStart={startRecording}
          isRecording={isRecording}
          status={status}
        />
      </Card>
      <SimilarityResultDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        loading={loading}
        similarityResult={similarityResult}
        similarityDetails={similarityDetails}
      />
    </>
  );
};

export default CompareAudio;
