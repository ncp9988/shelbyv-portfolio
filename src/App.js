import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [projectSelected, setProjectSelected] = useState(false)
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header>
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Header>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;