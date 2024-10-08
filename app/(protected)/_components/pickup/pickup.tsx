"use client";

import React, { useEffect } from 'react';
import { PitchDetector } from "pitchy";
import getAudioContext from "audio-context";

interface CapturaAudioProps {
  onFrequencyDetected: (frequency: number, note: string) => void; // Ajuste na tipagem
}

class CapturaAudio extends React.Component<CapturaAudioProps, {}> {
  audioContext: AudioContext | null | undefined;
  analyser: AnalyserNode | undefined;
  detector: PitchDetector<Float32Array> | undefined;

  async componentDidMount() {
    await this.initializeAudioContext();

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const source = this.audioContext!.createMediaStreamSource(stream);
    this.analyser = this.audioContext!.createAnalyser();
    this.detector = PitchDetector.forFloat32Array(this.analyser.fftSize);
    source.connect(this.analyser);

    this.detectPitch();
  }

  initializeAudioContext = async () => {
    if (this.audioContext && this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    } else {
      this.audioContext = getAudioContext();
    }
  };

  detectPitch = () => {
    if (!this.analyser || !this.detector || !this.audioContext) {
      return;
    }

    const buffer = new Float32Array(this.analyser.fftSize);
    this.analyser.getFloatTimeDomainData(buffer);
    const [pitch, clarity] = this.detector.findPitch(
      buffer,
      this.audioContext.sampleRate
    );
    if (clarity > 0.9) {
      const note = this.frequencyToNote(pitch);
      this.props.onFrequencyDetected(pitch, note);
    }
    requestAnimationFrame(this.detectPitch);
  };

  frequencyToNote = (frequency: number) => {
    const noteNumber = 12 * Math.log2(frequency / 440);
    const roundedNoteNumber = Math.round(noteNumber);
    const octave = Math.floor(roundedNoteNumber / 12);
    const noteNames = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
    ];
    const noteName = noteNames[(roundedNoteNumber % 12 + 12) % 12];
    return `${noteName}${octave}`;
  };

  render() {
    return <></>;
  }
}

export default CapturaAudio;
