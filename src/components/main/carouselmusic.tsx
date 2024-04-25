import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Play, Pause } from 'lucide-react';
import ReactPlayer from 'react-player';
import { useMusicas } from '@/hooks/useMusicas';
import {  formatDistance } from 'date-fns'
import { Progress } from "@/components/ui/progress"
import { ptBR } from "date-fns/locale"

interface VideoProgress {
  playedSeconds: number;
  duration: number;
}

export function CarouselMusic() {
  const musicas = useMusicas();
  const [playing, setPlaying] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<VideoProgress>({ playedSeconds: 0, duration: 0 });
  [];
 
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="box-content"
    >
      <CarouselContent>
        {musicas.map(musica => (
          <CarouselItem key={musica.id}>
            <div >
              <Card>
                <CardContent className=" p-3 w-80 box-content">
                  
                     <div className={`flex justify-between  ${isPlaying? '' : ''}`}>
                     <div>
                    <img src={musica.capaAlbum} alt={musica.titulo} className="w-10 h-10 object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{musica.titulo}</p>
                      <p className="text-sm">{musica.artista}</p>
                      
                    </div>
                    <div className='pt-1'>
                  {playing === musica.linkYoutube && isPlaying ? (
                    <button onClick={() => setIsPlaying(false)}> <Pause /></button>
                  ) : (
                    <button onClick={() => {
                      setPlaying(musica.linkYoutube);
                      setIsPlaying(true) ;
                    }}> <Play /></button>
                  )}
                  </div>
                  </div>
                </CardContent>
                {playing === musica.linkYoutube && (
                  <div className="inset-x-0 bottom-0 bg-opacity-75">
                    <ReactPlayer
                      url={playing}
                      playing={isPlaying}
                      controls={false}
                      
                      width='100%'
                      height='100%'
                      onProgress={(state) => {
                        setVideoProgress({ playedSeconds: state.playedSeconds, duration: (musica.tempoMinutos * 60) + musica.tempoSegundos });
                      }}  
                    />
                   
                    <div className='flex justify-between m-1'>
                    <p className="px-2 text-muted-foreground text-xs"> {formatTime(videoProgress.playedSeconds)}</p>
                    <p className="px-2 text-muted-foreground text-xs"> {formatTime(videoProgress.duration)}</p>
                    </div>


                    <Progress value={(videoProgress.playedSeconds/videoProgress.duration) * 100 } />
                   
                  </div>
                )}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(num: number): string {
  return num < 10 ? `0${num}` : num.toString();
}