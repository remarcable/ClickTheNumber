import React from "react";
import PropTypes from "prop-types";

import { pages } from "./pages";
import Introduction from "../pages/Introduction";
import Game from "../pages/Game";
import Score from "../pages/Score";

const propTypes = {
  currentState: PropTypes.shape({
    page: PropTypes.string.isRequired,
    currentNumber: PropTypes.number,
    randomNumbers: PropTypes.arrayOf(PropTypes.number.isRequired),
    elapsedTime: PropTypes.number.isRequired,
    highscore: PropTypes.number,
  }).isRequired,
  handleGameClick: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  updateElapsedTime: PropTypes.func.isRequired,
};

const PageRenderer = ({
  currentState: { page, currentNumber, randomNumbers, elapsedTime, highscore },
  handleGameClick,
  startGame,
  updateElapsedTime,
}) => {
  if (page === pages.GAME) {
    return (
      <Game
        currentNumber={currentNumber}
        randomNumbers={randomNumbers}
        handleGameClick={handleGameClick}
        updateElapsedTime={updateElapsedTime}
      />
    );
  }

  if (page === pages.SCORE) {
    return <Score startGame={startGame} elapsedTime={elapsedTime} highscore={highscore} />;
  }

  // => page === pages.INTRODUCTION
  return <Introduction startGame={startGame} />;
};

PageRenderer.propTypes = propTypes;

export default PageRenderer;
