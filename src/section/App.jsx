import React, { useState, useEffect } from 'react';

import Index from "./Index/Index";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import { PortfolioProvider } from "./../context/context";
import {heroData, aboutData} from "./../context/data";

import Layout from "./../components/layout/layout"
function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });


  }, []);

  return (
      <PortfolioProvider value={{ hero, about }}>
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
