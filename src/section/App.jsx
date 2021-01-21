import React from 'react';

import Index from "./Index/Index";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import { PortfolioProvider } from "./../context/context";

function App() {


  return (
      <PortfolioProvider>
        <Index />
        <About />
        <Projects />
        <Contact />
      </PortfolioProvider>
  );
}

export default App;
