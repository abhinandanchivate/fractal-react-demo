// src/components/ChatBubble.jsx
import styled from "styled-components";
import { Card } from "antd";

export const ChatBubble = styled(Card)`
  max-width: 70%;
  margin: 10px;
  border-radius: 12px !important;
  background-color: ${({ role, theme }) =>
    role === "user" ? theme.palette.primary : theme.palette.accent} !important;
  color: white !important;
  align-self: ${({ role }) => (role === "user" ? "flex-end" : "flex-start")};
`;
