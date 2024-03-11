import { link } from 'fs';
import React, { useRef, useEffect } from 'react';


interface PlayerProps {
  link: string;
}

declare global {
  interface Window {
    YT: any;
  }
}

let player: YT.Player | null = null;

const onYouTubeIframeAPIReady = () => {
  if (player) {
    return;
  }

  player = new window.YT.Player('player', {
    width: 640,
    height: 360,
    videoId: getVideoIdFromLink(link),
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      showinfo: 0,
      autohide: 1,
      rel: 0,
      fs: 0,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
};

const onPlayerReady = (event: YT.PlayerEvent) => {
  const intervalId = setInterval(() => {
    const elapsedTime = event.target.getCurrentTime();
    console.log(`Elapsed time: ${elapsedTime} seconds`);
  }, 3000);
};

const getVideoIdFromLink = (videoLink: string) => {
  const match = videoLink.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
  return match ? match[1] : videoLink;
};

const Player: React.FC<PlayerProps> = ({ link }) => {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playerContainerRef.current) {
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);


    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!playerContainerRef.current || player) {
      return;
    }

    onYouTubeIframeAPIReady();
  }, [playerContainerRef, link]);

  useEffect(() => {
    if (!playerContainerRef.current || !player) {
      return;
    }

    player.cueVideoById(getVideoIdFromLink(link));
  }, [playerContainerRef, link]);

  return <div id="player" ref={playerContainerRef} />;
};

export default Player;
