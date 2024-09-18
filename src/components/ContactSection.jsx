// src/components/ContactSection.jsx
import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="ContactSection">
      <h2>Contatos e Localização</h2>
      <div className="ContactSection-container">
        {/* Card de Contato */}
        <div className="ContactCard">
          <h3>Entre em Contato</h3>
          <div className="ContactCard-info">
            <i className="ContactCard-icon">🏠</i>
            <p>Endereço: Rua Exemplo, Cidade, País</p>
          </div>
          <div className="ContactCard-info">
            <i className="ContactCard-icon">✉️</i>
            <p>Email: exemplo@dominio.com</p>
          </div>
          <div className="ContactCard-info">
            <i className="ContactCard-icon">📞</i>
            <p>Telefone: +258 84 123 4567</p>
          </div>
        </div>

        {/* Card de Localização */}
        <div className="ContactCard">
          <h3>Nossa Localização</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.054128256432!2d-8.429129384690155!3d40.20564147939159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f914aafe3557%3A0xa627ebfe9be44c13!2sUniversidade%20de%20Coimbra!5e0!3m2!1sen!2spt!4v1631704445465!5m2!1sen!2spt" 
            allowFullScreen=""
            loading="lazy"
            title="Localização SustainaAI"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
