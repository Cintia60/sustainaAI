import React from 'react';
import DataVisualization from './DataVisualization'; // Componente para gráficos
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h1>Painel de Controle</h1>
      <div className="Dashboard-content">
        {/* Card para o gráfico de linha */}
        <div className="Dashboard-item">
          <h2>Gráfico de Linha</h2>
          <DataVisualization type="line" />
        </div>

        {/* Card para o gráfico de barras */}
        <div className="Dashboard-item">
          <h2>Gráfico de Barras</h2>
          <DataVisualization type="bar" />
        </div>

        {/* Card para o gráfico de área */}
        <div className="Dashboard-item">
          <h2>Gráfico de Área</h2>
          <DataVisualization type="area" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
