import * as React from 'react'; 
import { PitchDetector } from 'pitchy'; 
import getAudioContext from 'audio-context'; 
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface State { note: string; frequency: number; selectedString: number; }

const standardTuning = { E3: 329.628, B2: 246.942, G2: 195.998, D2: 146.832, A1: 110.000, E1: 82.407, };

class Captador extends React.Component<{}, State> { 
  audioContext: AudioContext | null | undefined; 
  analyser: AnalyserNode | undefined; 
  detector: PitchDetector<Float32Array> | undefined;

  constructor(props: {}) { 
    super(props); 
    this.state = { 
      note: '', 
      frequency: 0, 
      selectedString: 1, 
    }; 
  }

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
    if (this.audioContext && this.audioContext.state === 'suspended') { 
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
    const [pitch, clarity] = this.detector.findPitch(buffer, this.audioContext.sampleRate); 
    if (clarity > 0.9) { 
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
    const noteName = noteNames[(roundedNoteNumber % 12 + 12) % 12]; 
    return `${noteName}${octave}`;
  };

  increaseString = () => { 
    if (this.state.selectedString < Object.keys(standardTuning).length) { 
      this.setState({ selectedString: this.state.selectedString + 1 }); 
    } 
  };

  decreaseString = () => { 
    if (this.state.selectedString > 1) { 
      this.setState({ selectedString: this.state.selectedString - 1 }); 
    } 
  };

  getCorrectNote = () => { 
    const { selectedString } = this.state; 
    const frequencies = Object.values(standardTuning); 
    const frequency = frequencies[selectedString - 1]; 
    const note = this.frequencyToNote(frequency); 
    return { frequency, note }; 
  };

  render() { 
    const { note, frequency, selectedString } = this.state; 
    const { note: correctNote, frequency: correctFrequency } = this.getCorrectNote();
    
    const arrowDirection = frequency < correctFrequency ? 'right' : 'left';

    return (
      
      <div className="flex flex-row items-center text-center gap-10">
        <div className="flex gap-1 flex-col m-1">
          {[1, 2, 3, 4, 5, 6].map((corda) => (
            <button key={corda} onClick={() => this.setState({ selectedString: corda })} className={`w-8 h-4 text-xs rounded bg-muted hover:bg-secondary focus:bg-primary focus:outline-none ${selectedString === corda ? 'bg-primary' : ''}`}>
              C{corda}
            </button>
          ))}
        </div>
        
        <div className='flex flex-col items-start'>
          {note !== correctNote && <span className="text-base ml-1">({correctNote})</span>}
          <div className="flex justify-center">
            {arrowDirection === 'left' && <ChevronLeft className="cursor-pointer"  size={24} />}
            <p className={`text-opacity-50 text-4xl ${note !== correctNote ? 'text-muted-foreground' : 'text-primary'}`}>
              {note}
              
            </p>
            {arrowDirection === 'right' && <ChevronRight className="cursor-pointer" size={24} />}
          </div>
          <p className="text-muted">
            {frequency.toFixed(2)} Hz
            {note === correctNote && <span className="text-base ml-1">({correctFrequency.toFixed(2)} Hz)</span>}
          </p>
        </div>
      </div>
    );
  } 
}

export default Captador;