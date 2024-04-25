import { useEffect, useState, useRef } from "react";

interface AlphaTabOptions {
  core: {
    tex: boolean;
  };
  display: {
    staveProfile: string;
    resources: {
      // staffLineColor: string;
    };
  };
  notation: {
    elements: {
      scoreTitle: boolean;
      scoreWordsAndMusic: boolean;
      effectTempo: boolean;
      guitarTuning: boolean;
    };
  };
  player: {
    scrollMode: string;
    enablePlayer: boolean;
    enableUserInteraction: boolean;
    enableCursor: boolean;
    soundFont: string;
  };
}

declare global {
  interface Window {
    alphaTab: {
      AlphaTabApi: new (
        ref: HTMLDivElement | null,
        options: AlphaTabOptions
      ) => any;
    };
  }
}

export default function Tabs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const apiRef = useRef<any | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    apiRef.current = new window.alphaTab.AlphaTabApi(ref.current, {
      core: {
        tex: true
      },
      display: {
        staveProfile: "Default",
        resources: {
          // staffLineColor: "rgb(200, 10, 110)"
        }
      },
      notation: {
        elements: {
          scoreTitle: false,
          scoreWordsAndMusic: false,
          effectTempo: true,
          guitarTuning: false
        }
      },
      player: {
        scrollMode: "off",
        enablePlayer: true,
        enableUserInteraction: true,
        enableCursor: true,
        soundFont: `https://alphatab-kpy7o.codesandbox.io/sound_fonts/guitar_nylon.sf2`
      }
    });

    apiRef.current.soundFontLoaded.on(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          apiRef.current.play();
        }}
        disabled={!loaded}
      >
        play
      </button>
      <button
        onClick={() => {
          apiRef.current.pause();
        }}
        disabled={!loaded}
      >
        pause
      </button>
      <div ref={ref}>
        \tempo 220 \tuning A4 E4 C4 G4 . \ts 4 4 0.4 1.4 3.4 0.4 | 2.4 3.4 0.4
        2.4 | 3.4 0.3 2.3 0.2 | 1.2 3.2 0.1 1.1 | 3.1.1
      </div>
    </div>
  );
}
