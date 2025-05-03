import { useState, useEffect } from "react";
import "./chat.css";
import { Header } from "../../components/header";
import { api } from "../../lib/api";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  function handleSendMessage() {
    if (input.trim() === "") return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      generateBotResponse(input.trim());
    }, 500);
  }

  async function generateBotResponse(userInput: string) {
    try {
    const res = await api.get(`/messages/${userInput}`)
    const botText = res.data.response
    setMessages((prev) => [...prev, { sender: "bot", text: botText }]);}
    catch (error) {
      const errorMessage = "Desculpe, não consegui entender sua pergunta. Tente digitar algum número de 1 a 5 novamente!";
      setMessages((prev) => [...prev, { sender: "bot", text: errorMessage }]);
  }
}

  function startConversation() {
    const welcomeMessage: Message = {
      sender: "bot",
      text: "👋 Olá, fã da FURIA! Escolha uma opção para começar:\n1️⃣ Curiosidades sobre a FURIA e o CS\n2️⃣ Próximos jogos \n3️⃣ Conhecer jogadores\n4️⃣ Cânticos da torcida\n5️⃣Alguns títulos",
    };
    setMessages([welcomeMessage]);
  }

  useEffect(() => {
    startConversation();
  }, []);

  return (
    <div>
      <Header />
      <div className="chat-container">
        <h2 className="message">Chat</h2>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "user" ? "user-message" : "bot-message"}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="Digite o número da opção..."
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
      </div>
    </div>
  );
}
