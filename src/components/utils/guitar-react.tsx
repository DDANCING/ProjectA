import { useMemo } from 'react';
import Guitar from 'react-guitar';
import { standard } from 'react-guitar-tunings';
import useSound from 'react-guitar-sound';
import { createRoot } from 'react-dom/client';


export function SampleGuitarWithSound() {
  const strings = useMemo(() => [0, 1, 2, 2, 0, 0], [1]);
  const { play } = useSound({ fretting: strings, tuning: standard });

  return(<div className='w-[900px]'> 
    <Guitar strings={strings} onPlay={play} />
  </div>
  )
}
const root = createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(<SampleGuitarWithSound />);