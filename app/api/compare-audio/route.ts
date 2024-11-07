// app/api/compare-audio/route.ts
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

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 segundos

  try {
    const response = await fetch("https://generous-recreation-production-e712.up.railway.app/compare-audio/", {
      method: "POST",
      body: requestFormData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Erro na API externa: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    if (error instanceof Error) {
      // Tratamento específico para erro do tipo Error
      return NextResponse.json(
        { error: `Falha ao se conectar com o serviço de comparação de áudio: ${error.message}` },
        { status: 500 }
      );
    } else {
      // Caso o erro não seja do tipo Error, transforme em string
      return NextResponse.json(
        { error: `Falha ao se conectar com o serviço de comparação de áudio: ${String(error)}` },
        { status: 500 }
      );
    }
  }
}
