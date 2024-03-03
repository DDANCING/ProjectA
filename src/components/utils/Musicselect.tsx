import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";

interface Musica {
  id: number;
  titulo: string;
  artista: string;
  capaAlbum: string;
  // ... outras propriedades, se houver
}

const MusicSelector = () => {
  const [musicas, setMusicas] = useState<Musica[]>([]);

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

  return (
    <Carousel>
      <CarouselContent className='className="h-64 w-48 flex items-center justify-center"'>
        {musicas.map((musica) => (
          <CarouselItem className="" key={musica.id}>
           <div className='h-44 w-44 border border-muted'>

            <img src={musica.capaAlbum} alt={`${musica.titulo} - ${musica.artista}`}  />
            </div>
            <div>
            <p className='text-lg'>{musica.titulo}</p>
            <p className='text-xs'>{musica.artista}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MusicSelector;
