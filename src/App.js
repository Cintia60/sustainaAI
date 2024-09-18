// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import AIIntegration from './components/AIIntegration'; // Importar novo componente
import FAQ from './components/FAQ'; // Importar novo componente
import Dashboard from './components/Dashboard'; // Importar o Dashboard
//import WeatherInfo from './components/WeatherInfo'; // Importar WeatherInfo
import ReportGenerator from './components/ReportGenerator'; // Importar ReportGenerator
import './App.css';
import logo from './logo.svg';

const Introduction = () => (
  <div className="intro-container">
    <h1>Bem-vindo ao SustainaAI</h1>
    <p>
      Transforme dados em insights com nossa plataforma avançada. Descubra as funcionalidades inovadoras que preparamos para você!
    </p>
  </div>
);

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Obrigado por explorar nossa plataforma!');
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Introduction />
          <button onClick={handleClick} className="App-button">
            Saiba Mais
          </button>
          {message && <p className="App-message">{message}</p>}
        </header>
        <FeatureSection />
        <AIIntegration />
        <Dashboard />
        <ReportGenerator />
        <AboutSection />
        <AboutMeSection />
        <FAQ />
        <ContactSection />
        {/* Adicionando novos componentes */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
