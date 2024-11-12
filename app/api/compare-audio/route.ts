import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const target_song_id = formData.get("target_song_id");
  const audio = formData.get("audio") as File;

  if (!target_song_id || !audio) {
    return NextResponse.json(
      { error: "target_song_id e áudio são obrigatórios." },
      { status: 400 }
    );
  }

  const requestFormData = new FormData();
  requestFormData.append("target_song_id", target_song_id.toString());
  requestFormData.append("audio", audio);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_COMPARE_AUDIO_IA_URL}/compare-audio/`, {
      method: "POST",
      body: requestFormData,
    });

    const contentType = response.headers.get("content-type") || "";
    if (!response.ok || !contentType.includes("application/json")) {
      console.error("Resposta inesperada da API externa", response.status, response.statusText);
      return NextResponse.json(
        { error: "Erro na comparação de áudio: resposta inesperada da API externa." },
        { status: 500 }
      );
    }

    // Extrai e registra o conteúdo da resposta
    const data = await response.json();
   

    if (typeof data.similarity_percentage === "undefined") {
      console.error("Formato de resposta inválido", data);
      return NextResponse.json(
        { error: "Erro na comparação de áudio: resposta inválida da API externa." },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("[API_COMPARE_AUDIO_ERROR]", error);

    const errorMessage =
      error instanceof Error && error.name === "AbortError"
        ? "Timeout: A requisição foi cancelada devido ao tempo limite excedido."
        : "Erro ao se conectar com o serviço de comparação de áudio.";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}