// src/App.jsx
import React from "react";
import styled from "styled-components";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { VoiceAssistant } from "./components/VoiceAssistant";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
`;

export default function App() {
  return (
    <Wrapper>
      <h2>🎨 AI Voice Design System (Ant Design)</h2>
      <ThemeToggleButton />
      <VoiceAssistant />
    </Wrapper>
  );
}
