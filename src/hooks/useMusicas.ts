import { useEffect, useState } from 'react';
import { SERVER_URL } from '@/lib/apiURL';



interface Musica {
  id: number;
  titulo: string;
  artista: string;
  linkYoutube: string;
  capaAlbum: string;
  tempoMinutos: 0;
  tempoSegundos: 0;
  afinacao: string;
  createdAt: string;
  updatedAt: string
}

export function useMusicas() {
  const [musicas, setMusicas] = useState<Musica[]>([]);

  useEffect(() => {
    async function fetchMusicas() {
      try {
        const response = await fetch(`${SERVER_URL}/api/musicas`);
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

  return musicas;
}