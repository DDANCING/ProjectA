import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Play, Pause } from 'lucide-react';
import ReactPlayer from 'react-player';

interface Musica {
  id: number;
  titulo: string;
  artista: string;
  linkYoutube: string;
  capaAlbum: string;
}

interface VideoProgress {
  playedSeconds: number;
  duration: number;
}

export function CarouselMusic() {
  const [musicas, setMusicas] = useState<Musica[]>([]);
  const [playing, setPlaying] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<VideoProgress>({ playedSeconds: 0, duration: 0 });

  useEffect(() => {
    async function fetchMusicas() {
      try {
        const response = await fetch('http://localhost:3333/musicas');
        if (!response.ok) {
          throw new Error('Erro ao buscar músicas');
        }
        const data = await response.json();
        setMusicas(data);
      } catch (error) {
        console.error('Erro ao buscar músicas:', error);
      }
    }

    fetchMusicas();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className=""
    >
      <CarouselContent className="-mt-1">
        {musicas.map(musica => (
          <CarouselItem key={musica.id} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex justify-around p-3 w-80">
                  <img src={musica.capaAlbum} alt={musica.titulo} className="w-10 h-10 object-cover" />
                  <div>
                    <div>
                      <p className="text-sm font-semibold">{musica.titulo}</p>
                      <p className="text-sm">{musica.artista}</p>
                    </div>
                  </div>
                  {playing === musica.linkYoutube && isPlaying ? (
                    <button onClick={() => setIsPlaying(false)}> <Pause /></button>
                  ) : (
                    <button onClick={() => {
                      setPlaying(musica.linkYoutube);
                      setIsPlaying(true);
                    }}> <Play /></button>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {playing && (
        <div className="flex justify-center items-center w-full">
          <div>
            <ReactPlayer
              url={playing}
              playing={isPlaying}
              controls={false}
              width='100%'
              height='100%'
              onProgress={(state) => {
                setVideoProgress({ playedSeconds: state.playedSeconds, duration: state.loadedSeconds });
              }}
            />
            <p>Tempo atual: {formatTime(videoProgress.playedSeconds)}</p>
          </div>
        </div>
      )}
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
  

