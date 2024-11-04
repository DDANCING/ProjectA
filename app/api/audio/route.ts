import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('audio');
    const targetSongId = formData.get('target_song_id');

    if (!file || !targetSongId) {
      return NextResponse.json({ error: 'Audio file or target song ID is missing' }, { status: 400 });
    }

    // Construir o FormData para envio
    const requestData = new FormData();
    requestData.append('audio', file);
    requestData.append('target_song_id', targetSongId);

    // Envia a requisição para a API de comparação
    const response = await fetch(`${process.env.NEXT_PUBLIC_COMPARE_AUDIO_IA_URL}/compare-audio/`, {
      method: 'POST',
      body: requestData,
      headers: {
        'Authorization': `Bearer ${process.env.NEXTAUTH_SECRET}`,
        // Remova o cabeçalho Content-Type para permitir que fetch o defina automaticamente
      },
    });

    if (!response.ok) {
      const message = await response.text();
      console.error('API responded with an error:', message);
      return NextResponse.json({ error: `Failed to compare audio: ${message}` }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Unexpected error occurred during upload' }, { status: 500 });
  }
}
