import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/hero';

import './App.css';
import Background from './Background';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/footer/Footer';




function App() {
  return (
    <div>
      <Background /> 
      <Header />
      <Hero />
      <Certifications />
      <Footer />
    </div>
    
  );
}

export default App;