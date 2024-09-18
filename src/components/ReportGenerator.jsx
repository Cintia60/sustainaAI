import React from 'react';
import { jsPDF } from 'jspdf';
import './ReportGenerator.css'; // Importar o arquivo CSS

const ReportGenerator = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Relatório de SustainaAI', 10, 10);
    doc.save('relatorio.pdf');
  };

  return (
    <button className="ReportGenerator-button" onClick={generatePDF}>
      Gerar Relatório PDF
    </button>
  );
};

export default ReportGenerator;
