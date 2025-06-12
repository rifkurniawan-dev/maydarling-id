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
    // GANTI URL API SEMENTARA UNTUK TESTING
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Parsed JSON:", data);  // ini untuk melihat respon di console browser

    // misalnya kita pakai data.title dari API dummy
    const botMessage = { text: data.title, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
  } catch (error) {
    const botMessage = { text: "Maaf, terjadi kesalahan.", sender: "bot" };
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
