"use client";

import { useState, useEffect } from "react";
import MicRecorder from "mic-recorder";
import { Button } from "@/components/ui/button";
import { Audio } from 'react-loader-spinner'

interface CompareAudioProps {
  targetSongId: number;
  recordingDuration: number; // Duração da gravação em segundos
}

const CompareAudio: React.FC<CompareAudioProps> = ({ targetSongId, recordingDuration }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<MicRecorder | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [similarityResult, setSimilarityResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newRecorder = new MicRecorder({
        bitRate: 128,
        encoder: "wav",
        sampleRate: 44100,
      });
      setRecorder(newRecorder);
    }
  }, []);

  const startRecording = async () => {
    if (recorder) {
      await recorder.start();
      setIsRecording(true);

      // Parar gravação automaticamente após a duração especificada
      setTimeout(async () => {
        if (recorder) {
          const [buffer, blob] = await recorder.stop().getAudio();
          const file = new File(buffer, `audio_${Date.now()}.wav`, { type: blob.type });
          setAudioBlob(blob);
          setIsRecording(false);

          // Enviar o áudio e exibir o resultado
          await uploadAudioFile(file);
        }
      }, recordingDuration * 1000); // Convertendo para milissegundos
    }
  };

  const uploadAudioFile = async (file: File) => {
    try {
      setLoading(true); // Ativar o indicador de carregamento
      const formData = new FormData();
      formData.append("target_song_id", targetSongId.toString());
      formData.append("audio", file);

      const response = await fetch("/api/compare-audio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error("API responded with an error:", response.status);
        throw new Error("Falha ao comparar o áudio");
      }

      const result = await response.json();
      setSimilarityResult(`Similaridade: ${result.similarity_percentage}% com a música: ${result.song_name}`);
    } catch (error) {
      console.error("Erro no upload:", error);
      alert(`Erro no upload: ${error}`);
    } finally {
      setLoading(false); // Desativar o indicador de carregamento
    }
  };

  return (
    <div>
      <h2>Comparar Áudio</h2>
      <Button onClick={startRecording} disabled={isRecording}>
        {isRecording ? "Gravando..." : "Iniciar Gravação"}
      </Button>
      {loading && <div>
        <Audio
  height="80"
  width="80"
  color="green"
  ariaLabel="loading"

/>
        </div>}
      {similarityResult && <p>{similarityResult}</p>}
      {audioBlob && (
        <div>
          <h3>Pré-visualização:</h3>
          <audio controls>
            <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      )}
    </div>
  );
};

export default CompareAudio;
