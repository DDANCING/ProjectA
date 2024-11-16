"use client"

import React, { useState, useEffect } from "react";
import ProgressBar from "./audio/progressbar";
import { Card } from "@/components/ui/card";
import SimilarityResultDialog from "./audio/audio-compare-result";
import SideBar from "./sidebar";
import Tablature from "./tablature/tabs";
import AudioRecorder from "./audio/audio-recorder";
import { Exit } from "./exit";
import AudioFooter from "./audio/footer";

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
  musicRecomend: {
    title: string;
    id: number;
    artist: string;
    ProgressGameMusic: {
        percentage: number;
    }[];
    coverAlbum: string;
  }[];
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
  musicRecomend,
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
  const [isOpen, setIsOpen] = useState(false);

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
        <Card className="relative w-full h-full max-h-[calc(93vh-40px)] overflow-y-auto scrollbar-none shadow-none border-2 border-muted-foreground">
          <div className="sticky top-0 z-10 w-full">
            <ProgressBar
              hasActiveSubscription={!!userSubscription?.isActive}
              hearts={hearts}
              progress={progress}
              setIsOpen={setIsOpen} // Passando `setIsOpen` como função
            />
          </div>
          <div className="h-full flex items-center justify-center">
            <div>
              <Exit isOpen={isOpen} setIsOpen={setIsOpen} />
              <Tablature
              startPlayback={isRecording} 
              AbcUrl={musicTablature || "no content"}
              />
            </div>
          </div>
          <div className="sticky bottom-0 z-10 w-full">
            <AudioFooter
              points={points || 0}
              onStart={() => setIsRecording(true)}
              isRecording={isRecording}
              hearts={hearts}
              status={status}
              musicId={musicId}
            />
          </div>
        </Card>
        <SideBar
          musicRecomend={[...musicRecomend]}
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
