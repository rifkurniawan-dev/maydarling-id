export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Simulasi jawaban chatbot
    const answer = `Ini jawaban simulasi untuk: ${message}`;

    res.status(200).json({ answer });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
