export async function handler(event) {
  try {
    const { audio } = JSON.parse(event.body);

    const buffer = Buffer.from(audio, "base64");

    const formData = new FormData();
    formData.append("file", new Blob([buffer], { type: "audio/webm" }), "audio.webm");
    formData.append("model", "gpt-4o-mini-transcribe");

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
