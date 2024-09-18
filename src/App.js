import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection';
import AboutMeSection from './components/AboutMeSection'; // Importar o novo componente
import ContactSection from './components/ContactSection'; // Importar o novo componente
import './App.css';
import logo from './logo.svg';

// Componente de introdução
const Introduction = () => (
  <div className="intro-container">
    <h1>Bem-vindo ao SustainaAI</h1>
    <p>
      Transforme dados em insights com nossa plataforma avançada. Descubra as funcionalidades inovadoras que preparamos para você!
    </p>
  </div>
);

function App() {
  // Estado para a mensagem do botão
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
        <AboutSection />
        <AboutMeSection /> {/* Adicionar a nova seção sobre mim */}
        <ContactSection /> {/* Adicionar a nova seção de contato */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
