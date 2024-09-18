// src/components/GraphComponent.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const GraphComponent = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

export default GraphComponent;
