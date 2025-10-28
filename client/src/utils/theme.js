import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    success: { main: "#2e7d32", contrastText: "#fff" }, //   green
    warning: { main: "#ed6c02", contrastText: "#fff" }, // orange
    danger: { main: "#d32f2f", contrastText: "#fff" }, // red
    info: { main: "#0288d1", contrastText: "#fff" }, // blue
  },
});

export default theme;
