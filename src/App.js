import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Criador from './Criador';
import Curiosidades from './Curiosidade';
import Aprendizado from './Aprendizado';
import Jogar from './Jogar';
import Rei from './Imagem/Rei.png';
import Aprendizadoicon from './Imagem/Aprendizadoicon.png';
import Curiosidadeicon from './Imagem/Curiosidadeicon.png';
import Homeicon from './Imagem/Homeicon.png';
import Jogaricon from './Imagem/Jogaricon.png';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul className="navbar">
              <li><Link to="/" className="nav-item"><img src={Homeicon} alt="Home" /> Início</Link></li>
              <li><Link to="/aprendizado" className="nav-item"><img src={Aprendizadoicon} alt="Aprendizado" /> Aprendizado</Link></li>
              <li><Link to="/curiosidades" className="nav-item"><img src={Curiosidadeicon} alt="Curiosidades" /> Curiosidades</Link></li>
              <li><Link to="/jogar" className="nav-item"><img src={Jogaricon} alt="Jogar" /> Jogar</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <div className="home-page">
                <div className="kings-container">
                  <img src={Rei} alt="Torre Esquerda" className="king-icon" />
                  <h1 className="main-title">PENUMBRA CHESS</h1>
                  <img src={Rei} alt="Torre Esquerda" className="king-icon" />
                </div>
                <p className="description">
                  Conheça o mundo do Xadrez, dê o primeiro passo rumo ao conhecimento, e enfrente o Penumbra
                </p>
              </div>
            } />
            <Route path="/curiosidades" element={<Curiosidades />} />
            <Route path="/aprendizado" element={<Aprendizado />} />
            <Route path="/jogar" element={<Jogar />} />
            <Route path="/criador" element={<Criador />} />
          </Routes>
        </main>

        <footer>
        <p>Desenvolvido por: <Link to="/criador">Cauã Luiz</Link></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
