import React from 'react';
import './Criador.css'; // Importando o CSS específico para esta página

function Criador() {
  return (
    <div className="criador-container">
      <h1>Perfil de Cauã Luiz</h1>
      
      {/* Foto de Perfil */}
      <img 
        src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987722169-VV6ZASHHZNRBJW9X0PLK/Key_Art_02_layeredjpg.jpg?format=1500w" 
        alt="Foto de Perfil" 
        className="perfil-image" 
      />

      {/* Informações Pessoais */}
      <div className="profile-section">
        <h2>Informações Pessoais</h2>
        <ul>
          <li><strong>Nome Completo:</strong> Cauã Luiz</li>
          <li><strong>RA:</strong> 323114741</li>
          <li><strong>Curso e Período Atual:</strong> Ciência da Computação - 4º Período</li>
          <li><strong>Endereço:</strong> Rua José de Matos</li>
          <li><strong>E-mail:</strong> caualuizzxx@gmail.com</li>
        </ul>
      </div>

      {/* UCs já cursadas */}
      <div className="profile-section">
        <h2>UCs Já Cursadas</h2>
        <ul>
          <li>Programação Orientada a Objetos</li>
          <li>Algoritmos e Estruturas de Dados</li>
          <li>Bancos de Dados</li>
          <li>Redes de Computadores</li>
        </ul>
      </div>

      {/* Descrição Pessoal */}
      <div className="profile-section">
        <h2>Descrição Pessoal</h2>
        <p>Tenho interesse em esportes como futebol e basquete, adoro passar tempo com a família e gosto de explorar novas tecnologias no meu tempo livre.</p>
      </div>

      {/* Descrição Profissional/Acadêmica */}
      <div className="profile-section">
        <h2>Descrição Profissional/Acadêmica</h2>
        <p>Sou estudante de Ciência da Computação com foco em desenvolvimento de sistemas. Tenho experiência em análise de dados e programação, e busco aprimorar minhas habilidades em desenvolvimento full stack.</p>
      </div>

      {/* Links para Redes Sociais */}
      <div className="profile-section links">
        <h2>Redes Sociais</h2>
        <a href="https://www.linkedin.com/in/caua-luiz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/SrLoki11" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Criador;
