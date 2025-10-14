import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./core/components/layout/Header";
import Landing from "./core/components/layout/Landing";
import Footer from "./core/components/layout/Footer";
import RootRouter from "./RootRouter";

function App() {
  return (
    <>
      <Header></Header>
      <RootRouter />
      <Footer />{" "}
    </>
  );
}

export default App;
