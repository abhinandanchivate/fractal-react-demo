// src/theme/ThemeProvider.jsx
import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { ConfigProvider, theme as antdTheme } from "antd";
import { lightTheme, darkTheme } from "./themes";
import GlobalStyle from "../styles/GlobalStyle";
import { ColorModeContext } from "../context/ThemeContext";

export const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setMode(prefersDark ? "dark" : "light");
  }, []);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  const toggle = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ColorModeContext.Provider value={{ toggle, mode }}>
      <ConfigProvider
        theme={{
          algorithm:
            mode === "light"
              ? antdTheme.defaultAlgorithm
              : antdTheme.darkAlgorithm,
          token: { colorPrimary: theme.palette.primary },
        }}
      >
        <StyledProvider theme={theme}>
          <GlobalStyle />
          {children}
        </StyledProvider>
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
