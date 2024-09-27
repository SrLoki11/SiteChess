import React from 'react';
import './Aprendizado.css';
import PeaoVideo from './Videos/Peao.mp4';
import CavaloVideo from './Videos/Cavalo.mp4';
import TorreVideo from './Videos/Torre.mp4';
import BispoVideo from './Videos/Bispo.mp4';
import RainhaVideo from './Videos/Rainha.mp4';
import ReiVideo from './Videos/Rei.mp4';

function Aprendizado() {
  return (
    <div className="aprendizado-container">
      {/* Introdução */}
      <h1 className="aprendizado-title">Aprenda Xadrez</h1>
      <h2 className="aprendizado-subtitle">Conhecimento tanto para iniciantes como para veteranos</h2>

      {/* Seção de Movimentos das Peças */}
      <div className="movimento-pecas-section">
        <h2 className="section-title">Movimento das Peças</h2>

        <div className="movimento-peca">
          <h3 className="peca-title">Peão</h3>
          <p className="peca-descricao">
            O Peão se move apenas para frente, mas captura peças na diagonal. Na sua primeira jogada, ele pode se mover duas casas.
          </p>
          <video controls className="peca-video">
          <source src={PeaoVideo} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>

        
        <div className="movimento-peca">
          <h3 className="peca-title">Cavalo</h3>
          <p className="peca-descricao">
            O Cavalo se move em forma de "L", duas casas em uma direção e depois uma casa perpendicular.
          </p>
          <video controls className="peca-video">
          <source src={CavaloVideo} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>

        <div className="movimento-peca">
          <h3 className="peca-title">Torre</h3>
          <p className="peca-descricao">
            A Torre sem move em linhas restas, quantas casas quiser.
          </p>
          <video controls className="peca-video">
          <source src={TorreVideo} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>

        <div className="movimento-peca">
          <h3 className="peca-title">Bispo</h3>
          <p className="peca-descricao">
            O Bispo se move em diagonais, quantas casas quiser.
          </p>
          <video controls className="peca-video">
          <source src={BispoVideo} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>

        <div className="movimento-peca">
          <h3 className="peca-title">Rei</h3>
          <p className="peca-descricao">
            O Rei se move em todas as direções, porem apenas uma casa.
          </p>
          <video controls className="peca-video">
          <source src={ReiVideo} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>

        <div className="movimento-peca">
          <h3 className="peca-title">Rainha</h3>
          <p className="peca-descricao">
            A Rainha pode se mover em TODAS as direções, quantas casas quiser.
          </p>
          <video controls className="peca-video">
          <source src={RainhaVideo} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>

          
        </div>

        
      </div>

      {/* Seção de Livros de Xadrez */}
      <div className="livros-section">
        <h2 className="section-title">Livros de Xadrez</h2>

        <div className="livro-item">
          <img src="https://m.media-amazon.com/images/I/61bMc7lQV5L._AC_UF1000,1000_QL80_.jpg" alt="Livro 1" className="livro-imagem" />
          <div className="livro-descricao">
            <h3>Meu Sistema: O Primeiro Livro de Ensino de Xadrez</h3>
            <p>O livro Meu Sistema é considerado por muitos como o mais importante da literatura enxadrística. Escrito em 1925 e traduzido para o português em 2007, 
              esse livro vem acompanhando gerações de jogadores ao redor do mundo. Seu autor, Aaron Nimzovitsch (Riga 1886-Copenhagem 1935), um dos mais proeminentes 
              jogadores de sua época, é considerado o pai da Escola Hipermoderna do xadrez. Essa escola revolucionou a abordagem teórica do jogo e é a base do desenvolvimento 
              do xadrez nos últimos 95 anos. Muitos jogadores de elite, como por exemplo o ex-Campeão Mundial Tigran Petrosian, tiveram no estudo de Meu Sistema a fonte do 
              desenvolvimento de suas carreiras esportivas. </p>
          </div>
        </div>

        <div className="livro-item">
          <img src="https://m.media-amazon.com/images/I/41RBmiIVqtL._SY466_.jpg" alt="Livro 2" className="livro-imagem" />
          <div className="livro-descricao">
            <h3>Art of Attack in Chess</h3>
            <p>Um dos melhores livros de xadrez já escritos, agora na edição algébrica revisada. O autor expõe tanto os princípios básicos quanto as formas mais 
              complexas de ataque ao rei. O estudo desta obra-prima adicionará poder e brilho ao jogo de qualquer entusiasta do xadrez.</p>
          </div>
        </div>

        <div className="livro-item">
          <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/davidkaufmann/phpnbc2cE.jpeg" alt="Livro 3" className="livro-imagem" />
          <div className="livro-descricao">
            <h3>Estratégia Moderna do Xadrez</h3>
            <p>Todo jogador de xadrez espera realizar combinações brilhantes e vencer partidas em um momento de glória. Contudo, tais combinações não surgem por 
              si mesmas; eles aparecem apenas como resultado de uma estratégia de xadrez adequada. É, portanto, surpreendente que tão poucos livros tratem deste 
              assunto tão importante, e é compreensível que o clássico moderno de Pachman tenha sido recebido com tanto entusiasmo por jogadores de xadrez de todos os níveis.</p>
          </div>
        </div>
      </div>

      {/* Seção de Cursos */}
      <div className="cursos-section">
        <h2 className="section-title">Indicações de Cursos de Xadrez</h2>

        <div className="curso-item">
          <img
            src="https://i.ytimg.com/vi/52P3dtx9Apg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDs-6LTkcPc-wDhFHcKdID5iWOOGw"
            alt="Curso de Xadrez para Iniciantes"
            className="curso-imagem"
          />
          <div className="curso-descricao">
            <h3>Curso de Xadrez para Iniciantes</h3>
            <p>
              Este curso é ideal para quem está começando a aprender xadrez. Ele aborda desde os movimentos básicos até estratégias essenciais para iniciantes.
            </p>
            <a href="https://www.youtube.com/playlist?list=PLAfuxKJO2K3jgcsuTdInec2pRIuDMXY1h" className="curso-link">
              Acesse o curso
            </a>
          </div>
        </div>

        {/* Adicione mais cursos conforme necessário */}
        <div className="curso-item">
          <img
            src="https://i.ytimg.com/vi/93m0mN2U84k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCRqYDIBoFRIcJZB6ihld3ftqurxw"
            alt="Curso Avançado de Estratégias de Xadrez"
            className="curso-imagem"
          />
          <div className="curso-descricao">
            <h3>Curso Avançado de Estratégias de Xadrez</h3>
            <p>
              Um curso avançado que explora táticas, combinações e estratégias utilizadas pelos melhores jogadores do mundo.
            </p>
            <a href="https://www.youtube.com/playlist?list=PLCWcMbTfLVtfmSytyoZhpxPkEj5gfIZ8Z" className="curso-link">
              Acesse o curso
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aprendizado;
