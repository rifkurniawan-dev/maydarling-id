export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { message } = req.body;

  // Dummy response (bisa nanti sambungkan ke OpenAI atau ML model)
  let responseText = "Maaf, saya belum mengerti.";

  if (message.includes("sampah")) {
    responseText = "Sampah adalah material sisa hasil aktivitas manusia.";
  }

  return res.status(200).json({ reply: responseText });
}

