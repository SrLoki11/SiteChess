import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import './Jogar.css';
import bot from './Imagem/Kanna.jpeg';

function Jogar() {
  const [game, setGame] = useState(new Chess()); // Cria o estado do jogo de xadrez

  // Função que lida com o movimento
  const onDrop = ({ sourceSquare, targetSquare }) => {
    // Verifica se as coordenadas são válidas
    if (!sourceSquare || !targetSquare) {
      console.error('Invalid move: Missing source or target square');
      return false;
    }

    // Verifica se a peça é válida
    const piece = game.get(sourceSquare);
    if (!piece) {
      console.error('Invalid move: No piece at source square');
      return false;
    }

    // Verifica se o movimento é de um peão chegando na oitava fileira (promoção)
    let move = null;
    if (piece.type === 'p' && (targetSquare[1] === '8' || targetSquare[1] === '1')) {
      // Aplica promoção apenas se for um peão chegando na última fileira
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // Promove para rainha
      });
    } else {
      // Movimento normal sem promoção
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
    }

    if (move === null) {
      console.error('Invalid move: Chess.js could not process the move');
      return false; // Se o movimento for inválido, retorna falso
    }

    setGame(new Chess(game.fen())); // Atualiza o estado do jogo com a nova posição
    return true;
  };

  return (
    <div className="jogar-container">
      <h1 className="jogar-title">Desafie o Penumbra</h1>
      <p className="jogar-text">
        Desafie o Penumbra, teste seus conhecimentos, e prove que se tornou um grande jogador.
      </p>

      <div className="bot-container">
        <img src={bot} alt="Imagem do Bot Penumbra" className="bot-image" />
      </div>

      <div className="chessboard-container">
        <h2>Tabuleiro de Xadrez</h2>
        <div className="chessboard-wrapper">
          <Chessboard
            id="BasicBoard"
            position={game.fen()} // Define a posição atual do jogo
            onPieceDrop={onDrop} // Define a função chamada quando uma peça é solta
          />
        </div>
      </div>
    </div>
  );
}

export default Jogar;
