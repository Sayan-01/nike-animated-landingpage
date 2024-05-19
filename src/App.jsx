import React from "react";
import "./index.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

const App = () => {
  return (
    <div className="min-h-[100vh] overflow-hidden bg-[#dfe0f4]">
      <Header />
      <HeroSection />
      <h1 className="bebas relative left-[90%] bottom-8 text-[30px]">SAYAN</h1>
    </div>
  );
};

export default App;
