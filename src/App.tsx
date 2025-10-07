import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
const App: React.FC = () => {
  return (
    <>
      <Header />
      
      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer /> 
    </>
  );
};

export default App;