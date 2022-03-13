import React, { useState } from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [projectSelected, setProjectSelected] = useState(false)
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Navigation>
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Navigation>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;