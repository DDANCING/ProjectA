"use client"
import React, { useState } from "react";

const CompareAudio: React.FC = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [targetSongId, setTargetSongId] = useState<number>(1); // Definido para 1, mas pode ser alterado
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setAudioFile(file || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!audioFile || !targetSongId) {
      setError("Por favor, selecione um arquivo de áudio e insira um target_song_id.");
      return;
    }

    const formData = new FormData();
    formData.append("audio", audioFile);
    formData.append("target_song_id", targetSongId.toString());

    try {
      const res = await fetch("/api/compare-audio", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data);
        setError(null);
      } else {
        setResponse(null);
        setError(data.error || "Erro desconhecido.");
      }
    } catch (err) {
      setError("Erro na comunicação com o servidor.");
      setResponse(null);
    }
  };

  return (
    <div>
      <h2>Comparar Áudio</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Selecione o arquivo de áudio:
          <input type="file" accept="audio/*" onChange={handleAudioChange} />
        </label>
        <label>
          Target Song ID:
          <input
            type="number"
            value={targetSongId}
            onChange={(e) => setTargetSongId(Number(e.target.value))}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {response && (
        <div>
          <h3>Resultado:</h3>
          <p>Porcentagem de similaridade: {response.similarity_percentage}%</p>
          <p>Nome da música: {response.song_name}</p>
          <pre>{JSON.stringify(response.details, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CompareAudio;
