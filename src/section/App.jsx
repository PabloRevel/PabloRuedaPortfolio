import React from 'react';

import Main from "./Main/Main";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills"
import { PortfolioProvider } from "./../context/context";

import Layout from "./../components/layout/layout"
function App() {

  return (
      <PortfolioProvider>
        <Layout>
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </PortfolioProvider>
  );
}

export default App;
