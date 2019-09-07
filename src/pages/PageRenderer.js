import React from "react";
import PropTypes from "prop-types";

import Introduction from "../pages/Introduction";
import Game from "../pages/Game";
import Score from "../pages/Score";

const propTypes = {
  currentState: PropTypes.shape({
    page: PropTypes.string.isRequired,
    currentNumber: PropTypes.number,
    randomNumbers: PropTypes.arrayOf(PropTypes.number.isRequired)
  }).isRequired,
  handleGameClick: PropTypes.func.isRequired,
  showIntroduction: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  goFullscreen: PropTypes.func.isRequired
};

const PageRenderer = ({
  currentState: { page, currentNumber, randomNumbers },
  handleGameClick,
  showIntroduction,
  startGame,
  goFullscreen
}) => {
  if (page === "Game") {
    return (
      <Game
        currentNumber={currentNumber}
        randomNumbers={randomNumbers}
        handleGameClick={handleGameClick}
      />
    );
  }

  if (page === "Score") {
    return <Score showIntroduction={showIntroduction} />;
  }

  // => page === 'Introduction'
  return <Introduction startGame={startGame} goFullscreen={goFullscreen} />;
};

PageRenderer.propTypes = propTypes;

export default PageRenderer;
