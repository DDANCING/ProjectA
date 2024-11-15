"use client"

import React, { useEffect, useRef, useState } from 'react';
import abcjs, { AbcVisualParams } from "abcjs";
import { Card } from '@/components/ui/card';

interface TablatureProps {
  startPlayback: boolean;
  AbcUrl: string;

}

const Tablature: React.FC<TablatureProps> = ({ startPlayback, AbcUrl }) => {
  const visualObjRef = useRef<any>(null);
  const paperRef = useRef<HTMLDivElement | null>(null);
  const cursorControlRef = useRef<CursorControl | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  const visualOptions: AbcVisualParams = {
    tablature: [
      {
        instrument: "guitar",
      },
    ],
    staffwidth: 1000,
  };

  useEffect(() => {
    if (!AbcUrl || AbcUrl === "no content") return;

    fetch(AbcUrl)
      .then((response) => response.text())
      .then((abcString) => {
        visualObjRef.current = abcjs.renderAbc("paper", abcString, visualOptions);
        cursorControlRef.current = new CursorControl("#paper", paperRef);
      })
      .catch((error) => console.error("Error loading ABC file:", error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AbcUrl]);

  useEffect(() => {
    if (startPlayback && visualObjRef.current && cursorControlRef.current) {
      startCursor();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startPlayback, visualObjRef, cursorControlRef]);

  useEffect(() => {
    if (startPlayback) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 100;

          return newTime;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [startPlayback]);

  useEffect(() => {
    if (cursorControlRef.current) {
      cursorControlRef.current.updateScrollPosition();
    }
  }, [currentTime]);

  const startCursor = () => {
    const cursorControl = cursorControlRef.current;
    if (!cursorControl || !visualObjRef.current) return;

    cursorControl.onStart();

    const timingCallbacks = new abcjs.TimingCallbacks(visualObjRef.current[0], {
      eventCallback: onEvent as unknown as abcjs.EventCallback,
    });

    timingCallbacks.start();
  };

  const onEvent = (ev: unknown) => {
    if (typeof ev === 'object' && ev !== null && 'elements' in ev && cursorControlRef.current) {
      cursorControlRef.current.onEvent(ev as any);
    } else {
      cursorControlRef.current?.onFinished();
    }
  };

  return (
    <Card className="flex max-h-[calc(100vh-40px)] overflow-y-auto overflow-x-auto h-[86vh] relative top-0 shadow-none scrollbar-none w-full">
      <div className='wrapper' id="paper" ref={paperRef}></div>
    </Card>
  );
};

class CursorControl {
  cursor: SVGLineElement | null;
  rootSelector: string;
  containerRef: React.RefObject<HTMLDivElement>;
  lastScrollPosition: number;

  constructor(rootSelector: string, containerRef: React.RefObject<HTMLDivElement>) {
    this.cursor = null;
    this.rootSelector = rootSelector;
    this.containerRef = containerRef;
    this.lastScrollPosition = 0;
  }

  onStart = () => {
    const svg = document.querySelector(`${this.rootSelector} svg`);
    if (svg) {
      this.cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
      this.cursor.setAttribute("class", "abcjs-cursor");
      this.cursor.setAttributeNS(null, 'x1', '0');
      this.cursor.setAttributeNS(null, 'y1', '0');
      this.cursor.setAttributeNS(null, 'x2', '0');
      this.cursor.setAttributeNS(null, 'y2', '0');
      svg.appendChild(this.cursor);
    }
  };

  removeSelection = () => {
    const lastSelection = document.querySelectorAll(`${this.rootSelector} .abcjs-highlight`);
    lastSelection.forEach((el) => el.classList.remove("abcjs-highlight"));
  };

  onEvent = (ev: any) => {
    if (ev.measureStart && ev.left === null) return;
    this.removeSelection();

    ev.elements.forEach((note: any) => {
      note.forEach((el: any) => el.classList.add("abcjs-highlight"));
    });

    if (this.cursor) {
      this.cursor.setAttribute("x1", (ev.left - 2).toString());
      this.cursor.setAttribute("x2", (ev.left - 2).toString());
      this.cursor.setAttribute("y1", ev.top.toString());
      this.cursor.setAttribute("y2", (ev.top + ev.height).toString());
    }
  };

  onFinished = () => {
    this.removeSelection();
    if (this.cursor) {
      this.cursor.setAttribute("x1", "0");
      this.cursor.setAttribute("x2", "0");
      this.cursor.setAttribute("y1", "0");
      this.cursor.setAttribute("y2", "0");
    }
  };

  updateScrollPosition = () => {
    if (!this.cursor || !this.containerRef.current) return;
  
    const cursorRect = this.cursor.getBoundingClientRect();
    const containerRect = this.containerRef.current.getBoundingClientRect();
    
    // Calculando a posição do scroll
    let scrollPosition = cursorRect.top - containerRect.top + this.containerRef.current.scrollTop;
  
    // Limitando o scroll para não ultrapassar o conteúdo
    const maxScroll = this.containerRef.current.scrollHeight - containerRect.height;
    scrollPosition = Math.min(Math.max(scrollPosition, 0), maxScroll);
  
    // Suavizando a rolagem para evitar tremulação
    if (Math.abs(scrollPosition - this.lastScrollPosition) > 30) {
      this.containerRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
      this.lastScrollPosition = scrollPosition;
    }
  };
}
export default Tablature;
