"use client";
import { useState, useEffect } from "react";
import ProgressBar from "./audio/progressbar";
import Footer from "./audio/footer";
import { Card } from "@/components/ui/card";
import SimilarityResultDialog from "./audio/audio-compare-result";
import SideBar from "./sidebar";
import Tablature from "./tablature/tabs";
import AudioRecorder from "./audio/audio-recorder";


interface CompareAudioProps {
  userId: string;
  musicId: number;
  targetSongId: number;
  recordingDuration: number;
  musicTitle: string;
  musicArtist: string;
  youtubeLink: string;
  musicTablature?: string;
  hearts: number;
  musicProgress: number;
  userSubscription: {
    isActive: boolean;
  } | null;
}

export const GameComponent: React.FC<CompareAudioProps> = ({
  targetSongId,
  recordingDuration,
  musicArtist,
  musicTitle,
  youtubeLink,
  userSubscription,
  hearts,
  musicTablature,
  musicProgress,
  userId,
  musicId,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [progress, setProgress] = useState(0);
  const [similarityPercentage, setSimilarityPercentage] = useState<number | null>(null);
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none"); 
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [similarityDetails, setSimilarityDetails] = useState<any>(null);
  const [points, setPoints] = useState<number | null>(null);

  const onPlayerReady = (event: any) => {
    setPlayer(event.target);
  };

  const onPlayerPlay = () => {
    setIsRecording(true);
  };

  useEffect(() => {
    
    if (similarityPercentage !== null) {
      setPoints(similarityPercentage * 10); 
    }
  }, [similarityPercentage]);

  return (
    <>
      <div className="flex w-full h-full gap-4 justify-between">
        <Card className="h-full flex flex-col shadow-none border-2 border-muted-foreground w-full">
          <ProgressBar
            hasActiveSubscription={!!userSubscription?.isActive}
            hearts={hearts}
            progress={progress} />
          <div className="h-full flex items-center justify-center">
            <div>
              <Tablature
                startPlayback={isRecording}
                AbcUrl={musicTablature || "no content"}
              />
            </div>
          </div>
          <Footer 
            points={points || 0}
            onStart={() => setIsRecording(true)}
            isRecording={isRecording}
            status={status} 
            musicId={musicId}
          />
        </Card>
        <SideBar
          onPlayerPlay={onPlayerPlay}
          onPlayerReady={onPlayerReady}
          youtubeLink={youtubeLink}
          artist={musicArtist}
          musicName={musicTitle}
          progress={musicProgress}
        />
      </div>
      <SimilarityResultDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        loading={loading}
        similarityResult={similarityPercentage}
        similarityDetails={similarityDetails}
      />
      <AudioRecorder
        userId={userId}
        musicId={musicId}
        recordingDuration={recordingDuration}
        targetSongId={targetSongId}
        startRecording={isRecording}
        setIsRecording={setIsRecording}
        setProgress={setProgress}
        setSimilarityPercentage={setSimilarityPercentage}
        setLoading={setLoading}
        setSimilarityDetails={setSimilarityDetails}
        setDialogOpen={setDialogOpen}
        player={player}
        setStatus={setStatus}
      />
    </>
  );
};
