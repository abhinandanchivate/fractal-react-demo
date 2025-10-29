// src/components/VoiceAssistant.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Button, Typography } from "antd";
import { ChatBubble } from "./ChatBubble";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 60vh;
  overflow-y: auto;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing * 2}px;
  background: ${({ theme }) =>
    theme.mode === "light" ? "#f9f9f9" : "rgba(255, 255, 255, 0.05)"};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const VoiceAssistant = () => {
  const [messages, setMessages] = useState([]);

  const handleVoice = () => {
    const userText = "Show my calendar";
    const aiReply = "You have 2 meetings scheduled today at 3 PM and 5 PM.";
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "assistant", text: aiReply },
    ]);
  };

  return (
    <Container>
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Voice Assistant
      </Typography.Title>
      {messages.map((msg, i) => (
        <ChatBubble key={i} role={msg.role}>
          {msg.text}
        </ChatBubble>
      ))}
      <Button
        type="primary"
        onClick={handleVoice}
        style={{ marginTop: "10px" }}
      >
        🎤 Ask Assistant
      </Button>
    </Container>
  );
};
