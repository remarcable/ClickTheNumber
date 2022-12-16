import React from "react";
import PropTypes from "prop-types";
import random from "just-random";
import classnames from "classnames";

import Button from "../components/Button/Button";
import ShareScore from "../components/ShareScore/ShareScore";

const propTypes = {
  restartGame: PropTypes.func.isRequired,
  elapsedTime: PropTypes.number.isRequired,
  highscore: PropTypes.number,
};

const Score = ({ restartGame, elapsedTime, highscore }) => {
  return (
    <main className="text-button-group">
      <h1 className="title">
        Your Time:{" "}
        <span
          className={classnames({ isNewHighscore: highscore === null || elapsedTime < highscore })}
        >
          {getElapsedSeconds(elapsedTime)}s
        </span>
      </h1>
      {highscore !== null && (
        <h2 className="subtitle best-time">
          Your best time so far: {getElapsedSeconds(highscore)}s
        </h2>
      )}
      <h2 className="subtitle game-message">{random(gameDoneMessages)}</h2>
      <Button onClick={restartGame}>Try Again</Button>
      <ShareScore highscore={getElapsedSeconds(highscore)} />
      <h2 className="subtitle small">
        Check out{" "}
        <a href="https://www.marcnitzsche.de/about?utm_source=clickthenumber&utm_medium=web&utm_campaign=scorepage">
          my other projects
        </a>{" "}
        if you like this game.
      </h2>
    </main>
  );
};

Score.propTypes = propTypes;

const gameDoneMessages = [
  "Great job! Why not try again and see if you can beat your own score?",
  "Well done! Let's do it again and set a new high score?",
  "Congratulations! You've completed the game. Do it again and improve your time?",
  "You're a true number ninja. Do it again and see if you can beat your previous record?",
  "Wow! Why not try again and see if you can do even better this time?",
  "Fantastic! Do it again and challenge yourself for the next level of excellence?",
];

function getElapsedSeconds(elapsedTime) {
  const elapsedSeconds = elapsedTime / 1000;
  return elapsedSeconds.toFixed(2);
}

export default Score;
