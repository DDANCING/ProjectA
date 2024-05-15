"use client";

import { useEffect, useState } from 'react';
import { musicList } from '@/data/music-list'; 
import ReactPlayer from 'react-player';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { Pause, Play } from 'lucide-react';

interface MusicListItem {
  title: string,
  artist: string,
  link: string,
  tabs: string,
  cover: string,
  tuning: string,
  createdAt: Date,
  updatedAt: Date,
  timeMin: number,
  timeSec: number,
}

interface musicListProps {
  musicslist: MusicListItem[];
}
interface VideoProgress {
  playedSeconds: number;
  duration: number;
}

export const MusicList: React.FC<musicListProps> = ({musicslist}) => {

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
        {musicslist.map((musiclist, index) => (
           <CarouselItem key={index} >
            <Card className=' bg-background/30 rounded-sm '>
            <CardContent className=" p-3 w-80 box-content">
            <div >
             <div className='flex flex-row justify-between'>
                 <Image
                  className='size-10'
                 src={musiclist.cover}
                 width={100}
                 height={100}
                 alt={musiclist.title}
                 />
                  <p>{musiclist.title}</p>
                  
            
            <div className='pt-1'>
                  {playing === musiclist.link && isPlaying ? (
                    <button onClick={() => setIsPlaying(false)}> <Pause /></button>
                  ) : (
                    <button onClick={() => {
                      setPlaying(musiclist.link);
                      setIsPlaying(true) ;
                    }}> <Play /></button>
                  )}
                  </div>
                  </div>
                  </div>
                 
            </CardContent>
            {playing === musiclist.link && (
                  <div className="inset-x-0 bottom-0 bg-opacity-75">
                    <ReactPlayer
                      url={playing}
                      playing={isPlaying}
                      controls={false}
                      
                      width='100%'
                      height='100%'
                      onProgress={(state) => {
                        setVideoProgress({ playedSeconds: state.playedSeconds, duration: (musiclist.timeMin * 60) + musiclist.timeSec });
                      }}  
                    />
                   
               
                    
                    <Progress value={(videoProgress.playedSeconds/videoProgress.duration) * 100 } />
                   
                  </div>
                )}
          </Card>
          </CarouselItem>
        ))}

        </CarouselContent>
        
      </Carousel>
  );
};

const fetchMusicList = async () => {
  const musicslist = await musicList();

  if (typeof musicslist === 'string') {
    throw new Error('Error fetching musics');
  }

  return musicslist;
}

const MusicsListPage: React.FC = () => {
  const [musicsList, setMusicsList] = useState<MusicListItem[]>([]);

  useEffect(() => {
    fetchMusicList()
      .then(musicsList => setMusicsList(musicsList))
      .catch(error => console.error(error));
  }, []);

  return <MusicList musicslist={musicsList} />;
}

export default MusicsListPage;
