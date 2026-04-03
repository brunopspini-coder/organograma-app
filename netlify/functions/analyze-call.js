export async function handler(event) {
  try {
    const body = JSON.parse(event.body);

    // Aqui esperamos receber um áudio em base64
    const audioBase64 = body.audio;

    if (!audioBase64) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Áudio não enviado" })
      };
    }

    // Converte base64 → Blob
    const audioBuffer = Buffer.from(audioBase64, "base64");

    const formData = new FormData();
    formData.append("file", new Blob([audioBuffer]), "audio.webm");
    formData.append("model", "whisper-1");

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: formData
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        transcription: data.text || "Erro ao transcrever"
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
