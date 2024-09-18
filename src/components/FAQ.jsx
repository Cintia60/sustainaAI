// src/components/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css'; // Adicione um arquivo CSS para estilizar o componente

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqData = [
    {
      question: 'O que é o SustainaAI?',
      answer: 'O SustainaAI é uma plataforma que utiliza inteligência artificial para transformar dados em insights valiosos.'
    },
    {
      question: 'Como posso começar a usar?',
      answer: 'Você pode começar criando uma conta e importando seus dados para começar a análise.'
    },
    {
      question: 'Quais são os principais recursos?',
      answer: 'Oferecemos machine learning, análise preditiva e automação para otimizar suas operações.'
    }
  ];

  return (
    <section className="FAQ">
      <h2>Perguntas Frequentes</h2>
      <div className="FAQ-list">
        {faqData.map((item, index) => (
          <div key={index} className="FAQ-item">
            <button className="FAQ-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </button>
            {expanded === index && (
              <div className="FAQ-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
