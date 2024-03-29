
import * as React from 'react'; 
import { PitchDetector } from 'pitchy'; 
import getAudioContext from 'audio-context'; 
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';

interface State { note: string; frequency: number; selectedString: number; }

const standardTuning = { E1: 82.407, A1: 110.000, D2: 146.832, G2: 195.998, B2: 246.942, E3: 329.628, };

class Captador extends React.Component<{}, State> { audioContext: AudioContext | null | undefined; analyser: AnalyserNode | undefined; detector: PitchDetector<Float32Array> | undefined;

constructor(props: {}) { super(props); this.state = { note: '', frequency: 0, selectedString: 1, }; }

async componentDidMount() { await this.initializeAudioContext();

const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
const source = this.audioContext!.createMediaStreamSource(stream);
this.analyser = this.audioContext!.createAnalyser();
this.detector = PitchDetector.forFloat32Array(this.analyser.fftSize);
source.connect(this.analyser);

this.detectPitch();
}

initializeAudioContext = async () => { if (this.audioContext && this.audioContext.state === 'suspended') { await this.audioContext.resume(); } else { this.audioContext = getAudioContext(); } };

detectPitch = () => { if (!this.analyser || !this.detector || !this.audioContext) { return; }

const buffer = new Float32Array(this.analyser.fftSize);
this.analyser.getFloatTimeDomainData(buffer);
const [pitch, clarity] = this.detector.findPitch(buffer, this.audioContext.sampleRate);
if (clarity > 0.8) {
  const note = this.frequencyToNote(pitch);
  this.setState({ note, frequency: pitch });
}
requestAnimationFrame(this.detectPitch);
};

frequencyToNote = (frequency: number) => { const noteNumber = 12 * Math.log2(frequency / 440);
const roundedNoteNumber = Math.round(noteNumber); const octave = Math.floor(roundedNoteNumber / 12);
const noteNames = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const noteName = noteNames[(roundedNoteNumber % 12 + 12) % 12];
return `${noteName}${octave}`;

};

increaseString = () => { if (this.state.selectedString < Object.keys(standardTuning).length) { this.setState({ selectedString: this.state.selectedString + 1 }); } };

decreaseString = () => { if (this.state.selectedString > 1) { this.setState({ selectedString: this.state.selectedString - 1 }); } };

getCorrectNote = () => { const { selectedString } = this.state; const frequencies = Object.values(standardTuning); const frequency = frequencies[selectedString - 1]; const note = this.frequencyToNote(frequency); return { frequency, note }; };

render() { const { note, frequency, selectedString } = this.state; const { note: correctNote, frequency: correctFrequency } = this.getCorrectNote();

return (
  <div className="flex flex-col items-center text-center">
    <div className="flex mb-4">
      <LucideArrowLeft onClick={this.decreaseString} className="cursor-pointer" size={24} />
      <p className="text-primary text-opacity-50 text-xl mx-2">Corda {selectedString}</p>
      <LucideArrowRight onClick={this.increaseString} className="cursor-pointer" size={24} />
    </div>
    <p className={`text-primary text-opacity-50 text-4xl ${note !== correctNote ? 'text-red-600' : ''}`}>
      {note}
      {note !== correctNote && <span className="text-base ml-1">({correctNote})</span>}
    </p>
    <p className={`text-muted ${note === correctNote ? 'text-green-600' : ''}`}>
      {frequency.toFixed(2)} Hz
      {note === correctNote && <span className="text-base ml-1">({correctFrequency.toFixed(2)} Hz)</span>}
    </p>
  </div>
);
} }

export default Captador;

