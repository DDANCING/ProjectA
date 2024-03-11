import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import { Play } from 'lucide-react';
import Player from './YouTubePlayer';
import { render } from 'react-dom';

interface Musica {
  id: number;
  titulo: string;
  artista: string;
  capaAlbum: string;
  linkYoutube: string;
}

const MusicSelector = () => {
  const [musicas, setMusicas] = useState<Musica[]>([]);
  const [selectedMusica, setSelectedMusica] = useState<Musica | null>(null);

  useEffect(() => {
    // Função para buscar as músicas no servidor
    const fetchMusicas = async () => {
      try {
        const response = await fetch('http://localhost:3333/musicas');
        const data = await response.json() as Musica[];
        setMusicas(data);
      } catch (error) {
        console.error('Erro ao buscar músicas:', error);
      }
    };

    fetchMusicas();
  }, []);

  const handlePlayButtonClick = () => {
    if (selectedMusica) {
      // Render the Player component with the selected music
      render(<Player link={selectedMusica.linkYoutube} />, document.getElementById('root') as Element | DocumentFragment);
    } else {
      console.warn('No music selected.');
    }
  };
  return (
    <div>
      <Carousel>
        
        <CarouselContent className=' flex items-center justify-center'>
          {musicas.map((musica) => (
            <CarouselItem key={musica.id}>
              <div className='border border-muted'>
                <img src={musica.capaAlbum} alt={`${musica.titulo} - ${musica.artista}`} />
              </div>
              <div>
                <p className='text-lg'>{musica.titulo}</p>
                <p className='text-xs'>{musica.artista}</p>
                <button
                  className='bg-blue-500 text-white px-2 py-1 rounded mt-2'
                  onClick={() => setSelectedMusica(musica)}
                >
                  Select
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <div className='items-center flex flex-col gap-5'>
        
        <button
          className=''
          onClick={handlePlayButtonClick}
        >
         <Play>Play</Play>
        </button>
      </div>
    </div>
  );
};

export default MusicSelector;
