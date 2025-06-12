import React, { useState } from "react";
import "../index.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

 const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { text: input, sender: "user" };
  setMessages([...messages, userMessage]);

  try {
    const response = await fetch(
      "https://chatbot-production-ced0.up.vercel.com/chat",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      }
    );

    const text = await response.text();
    console.log("API Response (raw text):", text);  // LOG RAW RESPONSE

    try {
      const data = JSON.parse(text);
      console.log("App JSON:", data);  // LOG PARSED JSON
      const botMessage = { text: data.answer, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (parseError) {
      console.error("Gagal parsing JSON:", parseError);
      const botMessage = { text: "Maaf, terjadi kesalahan saat parsing JSON.", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }

  } catch (error) {
    console.error("Fetch error:", error);
    const botMessage = { text: "Maaf, terjadi kesalahan koneksi.", sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
  }

  setInput("");
};

  return (
    <div className="chatbot-container">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
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
