"use client"; // Adicione essa linha

import React, { useState } from 'react';  // Agora o useState funcionará corretamente
import CapturaAudio from './pickup';
import Afinador from './tuner';

const AfinadorComponente = () => {
  const [frequency, setFrequency] = useState(0);
  const [note, setNote] = useState('*');

  const handleFrequencyDetected = (freq: number, note: string) => {
    setFrequency(freq);
    setNote(note);
  };

  return (
    <>
      <CapturaAudio onFrequencyDetected={handleFrequencyDetected} />
      <Afinador frequency={frequency} note={note} />
    </>
  );
};

export default AfinadorComponente;
