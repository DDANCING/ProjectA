"use client";

import React, { useEffect, useState, useRef } from 'react';
import abcjs from 'abcjs';

interface TablatureProps {
  jsonUrl: string; // URL to fetch the ABCJS data
  startPlayback: boolean; // Property to start playback
  musicDuration: number; // Music duration in seconds (received as a prop)
}

const Tablature: React.FC<TablatureProps> = ({ jsonUrl, startPlayback, musicDuration }) => {
  const [abcContent, setAbcContent] = useState<string | null>(null);
  const tablatureContainerRef = useRef<HTMLDivElement | null>(null);
  const visualObjRef = useRef<any>(null);
  const cursorRef = useRef<any>(null);

  // Cursor controller class
  class CursorControl {
    cursor: SVGLineElement | null = null;
    rootSelector: string;

    constructor(rootSelector: string) {
      this.rootSelector = rootSelector;
    }

    onStart = () => {
      const svg = document.querySelector(this.rootSelector + " svg");
      this.cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
      this.cursor.setAttribute("class", "abcjs-cursor");
      this.cursor.setAttributeNS(null, 'x1', "0");
      this.cursor.setAttributeNS(null, 'y1', "0");
      this.cursor.setAttributeNS(null, 'x2', "0");
      this.cursor.setAttributeNS(null, 'y2', "0");
      svg?.appendChild(this.cursor);
    };

    removeSelection = () => {
      const lastSelection = document.querySelectorAll(this.rootSelector + " .abcjs-highlight");
      lastSelection.forEach(selection => selection.classList.remove("abcjs-highlight"));
    };

    onEvent = (ev: any) => {
      if (!ev || (ev.measureStart && ev.left === null)) return;
      this.removeSelection();
    
      ev.elements.forEach((noteGroup: any) => {
        noteGroup.forEach((note: any) => note.classList.add("abcjs-highlight"));
      });
    
      if (this.cursor) {
        this.cursor.setAttribute("x1", `${ev.left - 2}`);
        this.cursor.setAttribute("x2", `${ev.left - 2}`);
        this.cursor.setAttribute("y1", `${ev.top}`);
        this.cursor.setAttribute("y2", `${ev.top + ev.height}`);
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
  }

  useEffect(() => {
    const fetchTablatureData = async () => {
      try {
        const response = await fetch(jsonUrl);
        const data = await response.text();
        setAbcContent(data);
      } catch (error) {
        console.error('Error fetching tablature data:', error);
      }
    };
    fetchTablatureData();
  }, [jsonUrl]);

  useEffect(() => {
    if (abcContent) {
      const visualObjArray = abcjs.renderAbc('tab-container', abcContent, {
        tablature: [
          {
            instrument: 'guitar',
            label: 'Guitar',
            tuning: ['E,', 'A,', 'D', 'G', 'B', 'e'],
          },
        ],
      });

      visualObjRef.current = visualObjArray[0];
      cursorRef.current = new CursorControl("#tab-container");

      if (startPlayback) {
        cursorRef.current.onStart();
        const timingCallbacks = new abcjs.TimingCallbacks(visualObjRef.current, {
          eventCallback: cursorRef.current.onEvent,
        });
        timingCallbacks.start();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abcContent, startPlayback]);

  return (
    <div className="border-2 border-primary">
      <div
        ref={tablatureContainerRef}
        className="hidden lg:block stick self-end bottom-6 max-h-[calc(94vh-40px)] overflow-y-auto h-[60vh] relative top-0 pb-10 scrollbar-none"
        style={{ whiteSpace: 'nowrap', fontFamily: 'Arial', fontSize: '16px' }}
      >
        <div className="inline-block" id="tab-container" />
      </div>
      <style jsx>{`
        .abcjs-highlight {
          fill: #0a9ecc;
        }
        .abcjs-cursor {
          stroke: red;
        }
      `}</style>
    </div>
  );
};

export default Tablature;
