"use client";

import { useState, useEffect } from "react";
import MicRecorder from "mic-recorder";
import { toast } from "sonner";
import { postProgressMusic } from "@/actions/game-progress";
import { compareAudio } from "@/actions/compare-audio";

interface AudioRecorderProps {
  userId: string;
  musicId: number;
  recordingDuration: number;
  targetSongId: number;
  startRecording: boolean;
  setProgress: (value: number) => void;
  setSimilarityPercentage: (value: number | null) => void;
  setLoading: (value: boolean) => void;
  setStatus: (value: "correct" | "wrong" | "none") => void;
  setSimilarityDetails: (value: any) => void;
  setDialogOpen: (value: boolean) => void;
  player: any;
  setIsRecording: (value: boolean) => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({
  recordingDuration,
  targetSongId,
  startRecording,
  setProgress,
  setSimilarityPercentage,
  setLoading,
  setStatus,
  setSimilarityDetails,
  setDialogOpen,
  player,
  setIsRecording,
  userId,
  musicId,
}) => {
  const [recorder, setRecorder] = useState<MicRecorder | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newRecorder = new MicRecorder({ bitRate: 128, encoder: "wav", sampleRate: 44100 });
      setRecorder(newRecorder);
    }
  }, []);

  useEffect(() => {
    if (startRecording && recorder) {
      startRecordingProcess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startRecording]);

  const startRecordingProcess = async () => {
    if (recorder) {
      await recorder.start();
      setIsRecording(true);
      setLoading(true);
      if (player) player.playVideo();

      let elapsedTime = 0;
      const interval = setInterval(() => {
        elapsedTime += 1;
        setProgress((elapsedTime / recordingDuration) * 100);
        if (elapsedTime >= recordingDuration) clearInterval(interval);
      }, 1000);

      setTimeout(async () => {
        if (recorder) {
          const [buffer, blob] = await recorder.stop().getAudio();
          const file = new File(buffer, `audio.wav`, { type: blob.type });
          setIsRecording(false);
          if (player) player.stopVideo();
          await uploadAudioFile(file);
          setProgress(0);
        }
      }, recordingDuration * 1000);
    }
  };

  const uploadAudioFile = async (file: File) => {
    try {
      setDialogOpen(true);

      // Chama a função compareAudio
      const result = await compareAudio(targetSongId.toString(), file);

      if (result) {
        const similarity = result.similarity_percentage;
        const details = result.details;

        setSimilarityPercentage(similarity);
        setLoading(false);
        setStatus(similarity < 50 ? "wrong" : "correct");
        await postProgressMusic(userId, musicId, similarity);
        setSimilarityDetails(details);
      }
    } catch (error) {
      console.error("Erro no upload:", error);
      toast(`Erro no upload: ${error}`);
    }
  };

  return null;
};

export default AudioRecorder;
