// src/theme/themes.js
import { baseTokens } from "./tokens";

export const lightTheme = {
  ...baseTokens,
  mode: "light",
  palette: {
    background: "#ffffff",
    text: "#121212",
    primary: "#1677ff",
    accent: "#faad14",
  },
};

export const darkTheme = {
  ...baseTokens,
  mode: "dark",
  palette: {
    background: "#141414",
    text: "#ffffff",
    primary: "#1677ff",
    accent: "#ffb74d",
  },
};
