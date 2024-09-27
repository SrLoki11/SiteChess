import React from 'react';
import './Curiosidades.css'; // Você pode criar um arquivo CSS para estilização

function Curiosidades() {
  return (
    <div className="curiosidades-container">
      <h1 className="animated-title">Curiosidades do mundo do Xadrez</h1>
      
      {/* Layout para curiosidades */}
      <div className="curiosidade-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHGwd8cXpl93lN3_OWk2f75H6lUGCfPd27g&s" alt="Curiosidade 1" className="curiosidade-image"/>
        <p className="curiosidade-text">O número de jogos de xadrez únicos possíveis é muito maior que o número de elétrons no universo. O jogo de xadrez mais longo tem teoricamente possível 5.949 movimentos.</p>
      </div>
      
      
      <div className="curiosidade-item">
        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*S7auYaxQs9ytQtZL.jpg" alt="Curiosidade 2" className="curiosidade-image"/>
        <p className="curiosidade-text">A expressão “xeque-mate” no xadrez vem da expressão em persa “Shah Mat”, que significa “o rei está morto”.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://www.torneiosdexadrez.com.br/wp-content/uploads/2023/12/tabuleiro-estilizado-de-xadrez.png" alt="Curiosidade 2" className="curiosidade-image"/>
        <p className="curiosidade-text">O primeiro tabuleiro de xadrez com casas claras e escuras alternadas surgiu na Europa por volta do ano de 1090.”.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg" alt="Curiosidade 2" className="curiosidade-image"/>
        <p className="curiosidade-text">Albert Einstein era amigo do campeão mundial de xadrez Emanuel Lasker. Numa entrevista ao New York Times em 1936, Albert disse: 
          “Eu não jogo nenhum jogo. Não há tempo para isso. Quando termino o trabalho, não quero nada que exija o trabalho da mente.”. No entanto, ele aprendeu xadrez mais tarde.”.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://www.infomoney.com.br/wp-content/uploads/2019/07/14475_2_l.jpg" alt="Curiosidade 2" className="curiosidade-image"/>
        <p className="curiosidade-text">O xadrez de olhos vendados é uma habilidade impressionante que muitos jogadores de xadrez mais experientes possuem. 
          Certamente requer uma grande capacidade de ver o tabuleiro com clareza, o que pode ficar difícil depois de muitos movimentos. O recorde foi estabelecido em 1960, 
          em Budapeste, pelo húngaro Janos Flesch, que enfrentou 52 adversários simultaneamente com os olhos vendados. Ele venceu 31 desses jogos.”.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://antlia.com.br/wp-content/uploads/2022/08/10.jpg" alt="Curiosidade 2" className="curiosidade-image"/>
        <p className="curiosidade-text">O primeiro programa de computador que jogava xadrez foi desenvolvido em 1951, por Alan Turing. No entanto, nenhum computador era 
          poderoso o suficiente para processá-lo, então Turing o testou fazendo ele mesmo os cálculos e jogando de acordo com os resultados, demorando vários minutos por movimento.”.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Radha-Krishna_chess.jpg" alt="Curiosidade 2" className="curiosidade-image"/>
        <p className="curiosidade-text">O xadrez surgiu na Índia durante o Império Gupta, espalhando-se pelo Império Persa Sassânida e depois pelo Oriente Médio depois que os 
        muçulmanos conquistaram a Pérsia. A partir daí, espalhou-se pela Europa e pela Rússia.”.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_piece_-_White_queen.jpg" alt="Curiosidade 2" className="curiosidade-image"/>
        <p className="curiosidade-text">Originalmente, a Rainha só podia mover-se uma casa de cada vez, na diagonal. Mais tarde, ela pôde se mover dois quadrados de cada vez, 
          na diagonal. Foi só na Reconquista Espanha, com a sua poderosa rainha Isabella, que a Dama se tornou a peça mais forte do tabuleiro.”.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://www.torneiosdexadrez.com.br/wp-content/uploads/2023/12/jogando-xadrez.png" alt="Curiosidade 2" className="curiosidade-image"/>
        <p className="curiosidade-text">Existem 169.518.829.100.544.000.000.000.000.000 formas de jogar os primeiros 10 movimentos de um jogo de xadrez.”.</p>
      </div>

      <div className="curiosidade-item">
        <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pete/php3U3qMI.jpeg" alt="Curiosidade 2" className="curiosidade-image"/>
        <p className="curiosidade-text">A palavra “gambito” é especificamente um termo de xadrez, agora generalizado para significar um “sacrifício por vantagem”.</p>
      </div>
      
      {/* Seção para frases de grandes enxadristas */}
      <h2>Frases de Grandes Enxadristas</h2>
      <div className="frase-item">
        <img src="https://worldchesshof.org/sites/default/files/BobbyFischer400x400_7.jpg" alt="Nome do Enxadrista" className="frase-image"/>
        <p className="frase-text">“Eu não acredito em psicologia. Acredito em bons lances” - Bobby Fischer</p>
      </div>
      
      
      <div className="frase-item">
        <img src="https://en.chessbase.com/Portals/all/thumbs/094/94251.jpeg" alt="Nome do Enxadrista" className="frase-image"/>
        <p className="frase-text">“Eu estou convencido que o estilo de um enxadrista reflete sua personalidade.” - Vladimir Kramnik</p>
      </div>

      <div className="frase-item">
        <img src="https://www.lancesqi.com.br/wp-content/uploads/2020/09/Bronstein.jpg" alt="Nome do Enxadrista" className="frase-image"/>
        <p className="frase-text">“Uma partida de xadrez não é um teste de conhecimento: é uma batalha de nervos.” - David Bronstein</p>
      </div>

      <div className="frase-item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Tarrasch_72.jpg" alt="Nome do Enxadrista" className="frase-image"/>
        <p className="frase-text">“O xadrez, como o amor, como a música, tem o dom de fazer as pessoas felizes.” - Siegbert Tarrasch</p>
      </div>
    </div>
  );
}

export default Curiosidades;
