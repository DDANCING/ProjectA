"use client";
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

interface TabBar {
  chords: string[]; // chords[0] corresponde à corda E grave e chords[5] à corda E aguda
  pattern: string;
}

interface GuitarTabProps {
  jsonUrl: string; // URL para download do arquivo JSON
}

export const GuitarTab: React.FC<GuitarTabProps> = ({ jsonUrl }) => {
  const [data, setData] = useState<TabBar[]>([]);

  // Função para baixar e carregar o JSON
  const fetchData = async () => {
    try {
      const response = await fetch(jsonUrl);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Erro ao carregar o JSON:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [jsonUrl]);

  // Gera o padrão repetido de 16 caracteres
  const generatePattern = (pattern: string): string => {
    let filledPattern = pattern;
    while (filledPattern.length < 16) {
      filledPattern += pattern;
    }
    return filledPattern.slice(0, 16);
  };

  // Renderiza uma linha da tablatura para uma corda específica
  const renderTabLine = (chord: string | undefined, pattern: string) => {
    const patternString = generatePattern(pattern);
    let tabLine = '';

    for (let i = 0; i < patternString.length; i++) {
      tabLine += patternString[i] === 'x' ? (chord ? chord[i % chord.length] : '-') : '-';
    }

    return tabLine;
  };

  // Renderiza o tab completo com seis cordas para cada acorde
  const renderTab = () => {
    return data.map((bar, index) => (
      <div key={index} style={{ marginBottom: '10px' }}>
        <div>Bar {index + 1}</div>
        {Array(6).fill(null).map((_, stringIndex) => (
          <div key={stringIndex} style={{ fontFamily: 'monospace' }}>
            {renderTabLine(bar.chords[stringIndex], bar.pattern)}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      {data.length > 0 ? <div className='border-2 border-primary'> {renderTab()} </div> : 
       <ColorRing
       visible={true}
       height="80"
       width="80"
       ariaLabel="color-ring-loading"
       wrapperStyle={{}}
       wrapperClass="color-ring-wrapper"
       colors={['#6d28d9', '#192331', '#6d28d9', '#192331', '#6d28d9']}
     />
      }
    </div>
  );
};
