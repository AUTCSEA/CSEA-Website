import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <LandingPage />;
      </main>
    </>
  );
}

export default App;
