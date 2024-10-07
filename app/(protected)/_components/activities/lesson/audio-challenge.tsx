"use client";

import React, { useState } from 'react';
import CapturaAudio from '../../pickup/pickup'; // O componente CapturaAudio já existente
import { Button } from '@/components/ui/button'; // Importar o botão usado no projeto

interface AudioChallengeProps {
  question: string;
  challenge: {
    correctFrequency: number;
    correctNote: string;
  };
  onAnswer: (isCorrect: boolean) => void; // Callback para quando o usuário responde corretamente ou não
}

const AudioChallenge: React.FC<AudioChallengeProps> = ({ question, challenge, onAnswer }) => {
  const [frequency, setFrequency] = useState<number | null>(null);
  const [note, setNote] = useState<string>('*');
  const [feedback, setFeedback] = useState<string | null>(null); // Para exibir o feedback ao usuário

  // Função chamada quando a frequência é detectada
  const handleFrequencyDetected = (freq: number, detectedNote: string) => {
    setFrequency(freq);
    setNote(detectedNote);
  };

  // Função que compara a frequência detectada com a frequência correta
  const handleCheckAnswer = () => {
    if (frequency) {
      const difference = Math.abs(frequency - challenge.correctFrequency);
      const isCorrect = difference <= 5; // Margem de erro de 5Hz
      onAnswer(isCorrect); // Chama o callback para informar se a resposta está correta
      setFeedback(isCorrect ? "Resposta Correta!" : `Resposta Incorreta! O acorde correto era ${challenge.correctNote}`);
    } else {
      setFeedback("Nenhum som detectado. Tente novamente.");
    }
  };

  return (
    <div className="audio-challenge-container">
      <h3 className="question">{question}</h3>
      <CapturaAudio onFrequencyDetected={handleFrequencyDetected} />
      
      <div className="frequency-display">
        <p>Nota Detectada: {note}</p>
        <p>Frequência Detectada: {frequency ? `${frequency.toFixed(2)} Hz` : 'N/A'}</p>
      </div>

      <Button onClick={handleCheckAnswer} variant="default">
        Verificar Resposta
      </Button>

      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default AudioChallenge;
