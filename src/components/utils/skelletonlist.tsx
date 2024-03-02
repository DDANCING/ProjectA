import React, { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';

interface Musica {
  id: number;
  titulo: string;
  artista: string;
  linkYoutube: string;
  tablatura: string;
  // ... outras propriedades da sua tabela Musica
}

const MusicaListSkeleton: React.FC = () => {
  const [musicas, setMusicas] = useState<Musica[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de uma chamada assíncrona para obter músicas
    setTimeout(() => {
      const mockMusicas: Musica[] = [
        // ... simule os dados do banco de dados aqui
      ];

      setMusicas(mockMusicas);
      setLoading(false);
    }, 1500);
  }, []);

  const renderSkeletonItems = () => {
    if (loading) {
      // Renderizar esqueletos enquanto os dados estão sendo carregados
      return Array.from({ length: musicas.length }, (_, index) => (
        <div key={index} className="skeleton-item">
          <Skeleton />
        </div>
      ));
    }

    // Renderizar itens reais quando os dados estiverem carregados
    return musicas.map((musica) => (
      <div key={musica.id} className="musica-item">
        <h3>{musica.titulo}</h3>
        <p>{musica.artista}</p>
        {/* Adicione mais informações conforme necessário */}
      </div>
    ));
  };

  return (
    <div className="musica-list">
      {renderSkeletonItems()}
    </div>
  );
};

export default MusicaListSkeleton;