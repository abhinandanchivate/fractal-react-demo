import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:9500", // backend server
        changeOrigin: true, // CORS
        secure: false, // https false
      },
    }, // it looks like the rest call will be done by the frontend server but internally it will be directed to the backend server via this proxy
    // in ur application wherever u make a call to /api then it will be directed to http://localhost:9500
  },
});
