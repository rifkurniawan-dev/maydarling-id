import React, { useState } from "react";
import "../index.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch(
        "https://chatbot-production-ced0.up.vercel.com/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await response.json();
      const botMessage = { text: data.answer, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const botMessage = { text: "Maaf, terjadi kesalahan.", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }

    setInput("");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        width: "300px",
        zIndex: 1050,
      }}
    >
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Chatbot</h5>
        </div>
        <div
          className="card-body"
          style={{ height: "300px", overflowY: "auto" }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`d-flex mb-2 ${
                msg.sender === "user"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 rounded ${
                  msg.sender === "user"
                    ? "bg-success text-white"
                    : "bg-light text-dark"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ketik pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="btn btn-primary" onClick={sendMessage}>
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
