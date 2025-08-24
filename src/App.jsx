
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/hero';
import Certifications from './components/Certifications/Certifications';
import Projects from './components/projects/Projects';
import SobreMi from './components/about/SobreMi';
import CertificationsPage from './components/Certifications/CertificationsPage';
import Layout from './components/layout/Layout';
import Proyectos from './components/projects/Proyectos';

import './App.css';

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <Certifications />
            <Projects />
          </Layout>
        } />
        <Route path='/inicio' element={
          <Layout>
            <Hero />
            <Certifications />
            <Projects />
          </Layout>
        }/>
        <Route path="/sobre-mi" element={
          <Layout>
            <SobreMi />
          </Layout>
        } />
        <Route path="/certificaciones" element={
          <Layout>
            <CertificationsPage />
          </Layout>
        } />
        
        <Route path="/Proyectos" element={
          <Layout>
            <Proyectos />
          </Layout>
        } />

      </Routes>
    </Router>
  );
}

export default App;