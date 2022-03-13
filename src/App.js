import React, { useState } from 'react';
import Footer from './components/Footer';
import PortfolioContainer from './pages/PortfolioContainer';
import "./App.css";

function App() {
 
  return (
    <div>
        <PortfolioContainer></PortfolioContainer>
        <Footer></Footer>
    </div>
  );
}

export default App;