import React from 'react';

import Main from "./Main/Main";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills"
import './reset.scss';

import Layout from "./../components/layout/layout"
function App() {

  return (
        <Layout>
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
  );
}

export default App;
