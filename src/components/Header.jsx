// src/components/Header.jsx
import React from 'react';
import './Header.css'; // Para estilos específicos

const Header = () => {
  return (
    <header className="Header">
      <h1>SustainaAI</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
