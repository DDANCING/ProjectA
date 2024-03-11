import React, { useMemo, useRef } from 'react';
import { render } from 'react-dom';
import Guitar from 'react-guitar';
import { standard } from 'react-guitar-tunings';
import useSound from 'react-guitar-sound';
import { Link } from 'react-scroll';

function SampleGuitarWithSound() {
  const strings = useMemo(() => [0, 1, 2, 2, 0, -1], []);
  const { play } = useSound({ fretting: strings, tuning: standard });

  // Referência para o componente de guitarra
  const guitarRef = useRef<HTMLDivElement>(null);

  // Função para rolar até a posição da corda tocada
  const scrollToString = (stringIndex: number) => {
    if (guitarRef.current) {
      guitarRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
    play(stringIndex);
  };

  return (
    <div>
      {/* Componente de guitarra */}
      <Guitar strings={strings} />2

      {/* Links para cada corda */}
      <div>
        <Link to="string-0" smooth={true} onClick={() => scrollToString(0)}>
          Corda 1
        </Link>
        <Link to="string-1" smooth={true} onClick={() => scrollToString(1)}>
          Corda 2
        </Link>
        {/* ... Repita para as outras cordas ... */}
      </div>
    </div>
  );
}

render(<SampleGuitarWithSound />, document.getElementById('root'));
