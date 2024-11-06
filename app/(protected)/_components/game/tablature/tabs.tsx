"use client";

import React, { useEffect, useState, useRef } from 'react';
import abcjs from 'abcjs';

interface TablatureProps {
  jsonUrl: string; // URL to fetch the JSON data
  startPlayback: boolean; // Property to start playback
  musicDuration: number; // Music duration in seconds (received as a prop)
}

const Tablature: React.FC<TablatureProps> = ({ jsonUrl, startPlayback, musicDuration }) => {
  const [abcContent, setAbcContent] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0); // For tracking progress in percentage
  const visualObjRef = useRef<any>(null); // To store the visual object returned by abcjs
  const progressLineRef = useRef<HTMLDivElement | null>(null); // To store the line progress element
  const tablatureContainerRef = useRef<HTMLDivElement | null>(null); // To store the container for scrolling

  useEffect(() => {
    // Fetch the JSON containing the ABC notation
    const fetchTablatureData = async () => {
      try {
        const response = await fetch(jsonUrl);
        const data = await response.json();
        setAbcContent(data.abc); // Assuming the JSON has a field `abc` containing the ABC notation
      } catch (error) {
        console.error('Error fetching tablature data:', error);
      }
    };

    fetchTablatureData();
  }, [jsonUrl]);

  useEffect(() => {
    if (abcContent) {
      // Render the ABC content as tablature using abcjs
      const visualObjArray = abcjs.renderAbc('tab-container', abcContent, {
        tablature: [
          {
            instrument: 'guitar',
            label: 'Guitar',
            tuning: ['E,', 'A,', 'D', 'G', 'B', 'e'], // default tuning for guitar
          },
        ],
      });

      const visualObj = visualObjArray[0];
      visualObjRef.current = visualObj; // Save the visual object for later use

      if (startPlayback) {
        const timingCallbacks = new abcjs.TimingCallbacks(visualObj, {
          qpm: 120, // Adjust the BPM as needed
        });

        // Function to update the progress and scroll the tablature horizontally
        const interval = setInterval(() => {
          const currentTime = timingCallbacks.currentMillisecond();
          const totalDuration = visualObj.getTotalTime(); // Get the total duration of the music

          // Calculate progress as a percentage of the total duration
          const progressPercentage = (currentTime / totalDuration) * 100;
          setProgress(progressPercentage);

          // Calculate how far to scroll based on the music duration and total tablature length
          if (tablatureContainerRef.current) {
            const scrollLength = (tablatureContainerRef.current.scrollWidth - tablatureContainerRef.current.clientWidth);
            const scrollPosition = (scrollLength * (progressPercentage / 100));
            tablatureContainerRef.current.scrollLeft = scrollPosition;
          }

          // Stop the interval when we reach the end
          if (currentTime >= totalDuration) {
            clearInterval(interval);
          }
        }, 50); // Adjust the update frequency as needed

        timingCallbacks.start(); // Start playback and timing callbacks
        return () => clearInterval(interval); // Clean up the interval when the component unmounts
      }
    }
  }, [abcContent, startPlayback]);

  return (
    <div className='border-2 border-primary'>
     
      <div
        ref={tablatureContainerRef}
        className="hidden lg:block stick self-end bottom-6 max-h-[calc(94vh-40px)] overflow-y-auto h-[60vh] relative top-0 pb-10 scrollbar-none"
        style={{ whiteSpace: 'nowrap', fontFamily: 'Arial', fontSize: '16px' }}
      >
        <div className=" inline-block" id="tab-container" />
      </div>
    </div>
  );
};

export default Tablature;
