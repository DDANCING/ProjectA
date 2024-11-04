"use client";

import { useState, useEffect } from 'react';
import MicRecorder from 'mic-recorder';
import { Button } from '@/components/ui/button';

export default function AudioRecorderClient() {
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<MicRecorder | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [similarityResult, setSimilarityResult] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newRecorder = new MicRecorder({
        bitRate: 128,
        encoder: 'wav',
        sampleRate: 44100,
      });
      setRecorder(newRecorder);
    }
  }, []);

  const startRecording = async () => {
    if (recorder) {
      await recorder.start();
      setIsRecording(true);
    }
  };

  const stopRecording = async () => {
    if (recorder) {
      const [buffer, blob] = await recorder.stop().getAudio();
      const file = new File(buffer, `audio_${Date.now()}.wav`, { type: blob.type });
      setAudioBlob(blob);
      setIsRecording(false);

      const result = await uploadAudioFile(file, 2); // Pass targetSongId
      if (result) {
        setSimilarityResult(`Similarity: ${result.similarity_percentage}% with song: ${result.song_name}`);
      }
    }
  };

  const uploadAudioFile = async (file: File, targetSongId: number) => {
    try {
      const formData = new FormData();
      formData.append('target_song_id', targetSongId.toString());
      formData.append('audio', file);
  
      const response = await fetch('/api/audio', {
        method: 'POST', // Verifique se o método é 'POST'
        body: formData,
      });
  
      if (!response.ok) {
        console.error('API responded with an error:', response.status);
        throw new Error('Failed to compare audio');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Upload error:', error);
      alert(`Upload error: ${error}`);
      return null;
    }
  };
  
  return (
    <div>
      <Button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </Button>
      {similarityResult && <p>{similarityResult}</p>}
      {audioBlob && (
        <div>
          <h3>Preview:</h3>
          <audio controls>
            <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      )}
    </div>
  );
}
