// src/components/FeatureCard.jsx
import React from 'react';
import './FeatureCard.css'; // Para estilos específicos

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="FeatureCard">
      <img src={imageUrl} alt={title} className="FeatureCard-image" />
      <h3 className="FeatureCard-title">{title}</h3>
      <p className="FeatureCard-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
