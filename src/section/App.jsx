import React from 'react';

import Index from "./Index/Index";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import { PortfolioProvider } from "./../context/context";

import Layout from "./../components/layout/layout"
function App() {

  return (
      <PortfolioProvider>
        <Layout>
          <Index />
          <About />
          <Projects />
          <Contact />
        </Layout>
      </PortfolioProvider>
  );
}

export default App;
