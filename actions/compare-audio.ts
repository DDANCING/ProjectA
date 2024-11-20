"use client"
export async function compareAudio(targetSongId: string, audio: File) {
  if (!targetSongId || !audio) {
    throw new Error("target_song_id e áudio são obrigatórios.");
  }

  const requestFormData = new FormData();
  requestFormData.append("target_song_id", targetSongId);
  requestFormData.append("audio", audio);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_COMPARE_AUDIO_IA_URL}/compare-audio/`,
      {
        method: "POST",
        body: requestFormData,
      }
    );

    const contentType = response.headers.get("content-type") || "";
    if (!response.ok || !contentType.includes("application/json")) {
      console.error(
        "Resposta inesperada da API externa",
        response.status,
        response.statusText
      );
      throw new Error("Erro na comparação de áudio: resposta inesperada.");
    }

    const data = await response.json();

    if (typeof data.similarity_percentage === "undefined") {
      console.error("Formato de resposta inválido", data);
      throw new Error(
        "Erro na comparação de áudio: resposta inválida da API externa."
      );
    }

    return data; // Retorna os dados se estiver tudo certo
  } catch (error) {
    console.error("[CLIENT_COMPARE_AUDIO_ERROR]", error);

    const errorMessage =
      error instanceof Error && error.name === "AbortError"
        ? "Timeout: A requisição foi cancelada devido ao tempo limite excedido."
        : "Erro ao se conectar com o serviço de comparação de áudio.";

    throw new Error(errorMessage);
  }
}
