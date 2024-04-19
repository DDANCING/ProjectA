import React from 'react';

interface VideoProgressBarProps {
  currentTime: number;
  duration: number;
}

const VideoProgressBar: React.FC<VideoProgressBarProps> = ({ currentTime, duration }) => {
  const calculateProgress = (): number => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  };

  return (
    <div style={{ width: '100%', height: '10px', backgroundColor: '#ccc' }}>
      <div
        style={{
          width: `${calculateProgress()}%`,
          height: '100%',
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
};

export default VideoProgressBar;
