import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <About/>
      <Skills />
      <Contact />
    </>
  );
};

export default App;
