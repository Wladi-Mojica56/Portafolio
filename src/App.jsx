import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/hero';
import Certifications from './components/Certifications/certifications';
import './App.css';
import Background from './Background';




function App() {
  return (
    <div>
      <Background /> 
      <Header />
      <Hero />
      <Certifications />

    </div>
    
  );
}

export default App;