// src/components/AboutMeSection.js
import React from 'react';
import './AboutMeSection.css'; // Importar o arquivo CSS para estilização

const AboutMeSection = () => (
  <section className="AboutMeSection">
    <div className="AboutMeSection-content">
      <img 
        src="/images/dalila.jpg"  
        className="AboutMeSection-photo" 
        alt="Cíntia Dalila Luís Cumbane" // Descrição da imagem
      />
      <div className="AboutMeSection-text">
        <h2>Cíntia Dalila Luís Cumbane</h2>
        <p>
          Cíntia Dalila Luís Cumbane é a fundadora da SustainaAI, uma plataforma inovadora dedicada à transformação e análise de dados. Atualmente, Cíntia é estudante do 3º ano de Engenharia Informática na Faculdade de Ciências e Tecnologias da Universidade de Coimbra. Natural de Moçambique, ela traz para o seu trabalho uma combinação única de paixão pela tecnologia e visão global.
        </p>
        <p>
          A SustainaAI foi criada como um projeto acadêmico com o objetivo de oferecer soluções avançadas para a visualização e análise de dados. O desenvolvimento da plataforma surgiu da necessidade crescente de ferramentas eficazes para o gerenciamento de informações em um cenário digital em rápida evolução. A plataforma busca proporcionar uma experiência de usuário intuitiva e acessível, ao mesmo tempo em que incorpora funcionalidades sofisticadas para atender às demandas do mercado.
        </p>
        <p>
          A visão de Cíntia para a SustainaAI é a de criar uma ferramenta que não apenas atenda às necessidades atuais de análise de dados, mas que também se adapte às futuras exigências tecnológicas. A plataforma reflete seu compromisso com a inovação e a excelência, promovendo uma integração eficaz entre tecnologia e práticas de gerenciamento de informações.
        </p>
        <p>
          O projeto representa um passo significativo na formação acadêmica e profissional de Cíntia, contribuindo para seu desenvolvimento na área de Engenharia Informática e sua capacidade de criar soluções tecnológicas de impacto. A SustainaAI é um testemunho do seu empenho em promover a inovação e melhorar a eficiência no gerenciamento de dados.
        </p>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
