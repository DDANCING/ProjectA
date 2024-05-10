"use client"

import * as React from 'react'; 
import { PitchDetector } from 'pitchy'; 
import getAudioContext from 'audio-context'; 


import { ChevronLeft, ChevronRight, RefreshCcw } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"


interface State { note: string; frequency: number; selectedString: number; }

const standardTuning = { E3: 329.628, B2: 246.942, G2: 195.998, D2: 146.832, A1: 110.000, E1: 82.407, };


class Captador extends React.Component<{}, State> { 
  audioContext: AudioContext | null | undefined; 
  analyser: AnalyserNode | undefined; 
  detector: PitchDetector<Float32Array> | undefined;

  constructor(props: {}) { 
    super(props); 
    this.state = { 
      note: '*', 
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
      <Drawer  >
         <div className=' bg-background p-2'>
          <a href="/game">
          <RefreshCcw className=' size-4'/>
          </a>
         <div className='flex flex-col items-center'>
        <p className={`text-primary text-4xl`}>
        {note}
       </p>
       <p className='text-muted'>
       {frequency.toFixed(2)} Hz
      </p>
      <DrawerTrigger asChild> 
        <Button variant="outline" className='text-muted-foreground border border-muted-foreground'>Abrir afinador</Button>
      </DrawerTrigger>
      </div>
      </div>
      <DrawerContent>
      <div className="flex flex-col items-center text-center mt-10 justify-center">
       
        
        <div className=' text-muted-foreground'>
       
          <div className="flex flex-row justify-around">
          <div className={arrowDirection === 'left' ? 'text-primary' : 'text-muted'}>
          <ChevronLeft className="flex "  size={24} />
            </div>
            
          <div className='flex flex-col '>
            <p className={`text-primary text-4xl ${note !== correctNote ? 'text-muted-foreground' : 'text-primary'}`}>
              {note}
            </p>
            <p>
            {frequency.toFixed(2)} Hz
            </p>
            </div>
            <div className={arrowDirection === 'right' ? 'text-primary' : 'text-muted'}>
             <ChevronRight className="flex" size={24} />
            </div>
          </div>
         
          
          <p className="text-muted">
           
            {note === correctNote && <span className="text-base ml-1">({correctFrequency.toFixed(2)} Hz)</span>}
            {note !== correctNote && <p className={`text-opacity-50 text-2xl ${note !== correctNote ? 'text-red-500' : 'text-green-500'}`}>{correctNote}</p>}
          </p>
          < DrawerFooter className='-mb-3' >
          <div className="flex gap-1 flex-row m-1 items-center">
          {[1, 2, 3, 4, 5, 6].map((corda) => (
            <button key={corda} onClick={() => this.setState({ selectedString: corda })} className={`w-8 h-4 text-xs rounded bg-muted hover:bg-secondary focus:bg-primary focus:outline-none ${selectedString === corda ? 'bg-primary' : ''}`}>
              C{corda}
            </button>
          ))}
          
  
        </div>

       <DrawerClose >
        <button className='border border-muted-foreground w-52'> Cancelar </button>
        </DrawerClose>
        </DrawerFooter>   
        </div>
      </div>
     </DrawerContent>
      </Drawer>
    );
  } 
}

export default Captador;