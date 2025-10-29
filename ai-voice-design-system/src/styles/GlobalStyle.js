// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.text};
    font-family: ${({ theme }) => theme.font.family};
    transition: ${({ theme }) => theme.transition};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
