import React from 'react';
import Introduction from '../pages/Introduction';
import Game from '../pages/Game';
import Score from '../pages/Score';

export default function PageRenderer({ currentState,
  handleGameClick,
  showIntroduction,
  startGame,
  goFullscreen }) {
  let page;

  switch (currentState.page) {
  case 'Game':
    page = (
      <Game
        currentNumber={currentState.currentNumber}
        randomNumbers={currentState.randomNumbers}
        handleGameClick={handleGameClick}
      />
    );
    break;
  case 'Score':
    page = <Score showIntroduction={showIntroduction} />;
    break;
  default: // = case 'Introduction'
    page = <Introduction startGame={startGame} goFullscreen={goFullscreen} />;
  }

  return page;
}
