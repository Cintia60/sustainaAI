// src/components/FeatureSection.jsx
import React from 'react';
import FeatureCard from './FeatureCard';
import './FeatureSection.css'; // Para estilos específicos

const features = [
  {
    title: 'Análise Avançada de Dados',
    description: 'Esta funcionalidade oferece uma análise aprofundada dos seus dados com visualizações interativas e relatórios detalhados. É ideal para usuários que precisam de insights profundos e compreensivos.',
    imageUrl: '/images/data_analytics.jpg',
  },
  {
    title: 'Monitoramento em Tempo Real',
    description: 'Esta função permite monitorar dados e métricas em tempo real, ajudando na tomada de decisões rápidas e baseadas em dados atualizados. Ideal para operações que necessitam de supervisão contínua.',
    imageUrl: '/images/realTime_monitor.jpg',
  },
  {
    title: 'Relatórios Personalizados',
    description: 'Gere relatórios personalizados com base em suas necessidades específicas. Esta funcionalidade permite criar e adaptar relatórios de forma flexível e eficiente.',
    imageUrl: '/images/custom_reports.jpg',
  },
];

const FeatureSection = () => {
  return (
    <section className="FeatureSection">
      <h2>Nossas Funcionalidades</h2>
      <div className="FeatureSection-container">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
