import React, { useState } from "react";
import "../index.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Fungsi pencarian artikel lokal
  const searchLocalArticles = (query) => {
    const semuaArtikel = [...artikelSamping, ...beritaMaydarling, ...edukasi];
    const hasil = semuaArtikel.filter(item =>
      item.judul.toLowerCase().includes(query.toLowerCase())
    );

    if (hasil.length > 0) {
      return hasil.map(item => `• ${item.judul}\n👉 ${item.link}`).join("\n\n");
    } else {
      return null; // tidak ditemukan
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Cek apakah pertanyaan terkait artikel
    const artikelResult = searchLocalArticles(input);
    if (artikelResult) {
      const botMessage = { text: artikelResult, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
      setInput("");
      return;
    }

    try {
      const response = await fetch(
        "https://chatbot-production-ced0.up.vercel.com/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = { text: data.answer, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Fetch error:", error);
      const botMessage = { text: "Maaf, terjadi kesalahan di server.", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }

    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Ketik pesan..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Kirim</button>
      </div>
    </div>
  );
}

export default Chatbot;
