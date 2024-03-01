import React, { useState, useEffect } from 'react';
import { Progress } from '../ui/progress';

interface YouTubePlayerProps {
  videoUrl: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = () => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const videoUrl = 'https://www.youtube.com/watch?v=xus4L2F2pNs&list=RDxus4L2F2pNs&start_radio=1&ab_channel=Novatroop';

  useEffect(() => {
    const videoIdMatch = videoUrl.match(
      /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    if (videoIdMatch) {
      setVideoId(videoIdMatch[1]);
    }
  }, [videoUrl]);

  const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(event.currentTarget.currentTime);
  };

  const handleDurationChange = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setDuration(event.currentTarget.duration);
  };

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const openYouTubeVideo = () => {
    if (videoId) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }
  };

  return (
    <div className="relative">
      {videoId && (
        <div className="aspect-w-16 aspect-h-9" onClick={openYouTubeVideo}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}`}
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full cursor-pointer"
            title="YouTube Video"
          />
        </div>
      )}
      <div className="flex items-center justify-center absolute inset-0">
        <button className="text-white" onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <Progress
          value={(currentTime / duration) * 100}
          className="h-2 w-full rounded-full bg-primary/20"
          style={{
            position: 'relative',
            backgroundImage: `linear-gradient(to right, #fff, #fff ${
              (currentTime / duration) * 100
            }%, #0000 0%)`,
          }}
        />
      </div>
    </div>
  );
};

export default YouTubePlayer;
