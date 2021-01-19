import React, { useState, useEffect } from 'react';

import Index from "./Index/Index";
import { PortfolioProvider } from "./../context/context";

function App() {
    const [hero, setHero] = useState({});
    const [about, setAbout] = useState({});
    const [projects, setProjects] = useState([]);
    const [contact, setContact] = useState({});
    const [footer, setFooter] = useState({});
  
    useEffect(() => {
      setHero({ ...heroData });
      setAbout({ ...aboutData });
      setProjects([...projectsData]);
      setContact({ ...contactData });
      setFooter({ ...footerData });
    }, []);

  return (
      <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
        <Index />
        
      </PortfolioProvider>
  );
}

export default App;
