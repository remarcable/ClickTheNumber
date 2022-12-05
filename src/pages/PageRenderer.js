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
  }).isRequired,
  handleGameClick: PropTypes.func.isRequired,
  showIntroduction: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  goFullscreen: PropTypes.func.isRequired,
  updateElapsedTime: PropTypes.func.isRequired,
};

const PageRenderer = ({
  currentState: { page, currentNumber, randomNumbers, elapsedTime },
  handleGameClick,
  showIntroduction,
  startGame,
  goFullscreen,
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
    return <Score showIntroduction={showIntroduction} elapsedTime={elapsedTime} />;
  }

  // => page === pages.INTRODUCTION
  return <Introduction startGame={startGame} goFullscreen={goFullscreen} />;
};

PageRenderer.propTypes = propTypes;

export default PageRenderer;
