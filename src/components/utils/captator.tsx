import * as React from 'react';
import { PitchDetector } from 'pitchy';
import getAudioContext from 'audio-context';

interface State {
  note: string;
  frequency: number;
}

class GuitarTuner extends React.Component<{}, State> {
  audioContext: AudioContext | null | undefined;
  analyser: AnalyserNode | undefined;
  detector: PitchDetector<Float32Array> | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      note: '',
      frequency: 0,
    };
  }

  async componentDidMount() {
    // Wait for a user gesture (e.g., click) before initializing the AudioContext
    await this.initializeAudioContext();

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const source = this.audioContext!.createMediaStreamSource(stream);
    this.analyser = this.audioContext!.createAnalyser();
    this.detector = PitchDetector.forFloat32Array(this.analyser.fftSize);
    source.connect(this.analyser);

    this.detectPitch();
  }

  initializeAudioContext = async () => {
    // Check if the AudioContext is in a suspended state
    if (this.audioContext && this.audioContext.state === 'suspended') {
      // Try to resume the AudioContext in response to a user gesture
      await this.audioContext.resume();
    } else {
      // Create a new AudioContext if it doesn't exist
      this.audioContext = getAudioContext();
    }
  };

  detectPitch = () => {
    if (!this.analyser || !this.detector || !this.audioContext) {
      return;
    }

    const buffer = new Float32Array(this.analyser.fftSize);
    this.analyser.getFloatTimeDomainData(buffer);
    const [pitch, clarity] = this.detector.findPitch(buffer, this.audioContext.sampleRate);
    if (clarity > 0.8) {
      const note = this.frequencyToNote(pitch);
      this.setState({ note, frequency: pitch });
    }
    requestAnimationFrame(this.detectPitch);
  };

  frequencyToNote = (frequency: number) => {
    const noteNumber = 12 * Math.log2(frequency / 440);
    const roundedNoteNumber = Math.round(noteNumber);
    const octave = Math.floor(roundedNoteNumber / 12);
    const noteNames = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const noteName = noteNames[(roundedNoteNumber % 12 + 12) % 12]; // Ajuste para lidar com números negativos
    return `${noteName}${octave}`;
  };

  render() {
    return (
      <div className='items-center text-center'>
        <p className='text-primary text-opacity-50 text-4xl'>{this.state.note}</p>
        <p className='text-muted'>{this.state.frequency.toFixed(2)} Hz</p>
      </div>
    );
  }
}

export default GuitarTuner;
