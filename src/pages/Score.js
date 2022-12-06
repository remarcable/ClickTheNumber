import React from "react";
import PropTypes from "prop-types";
import random from "just-random";

import Button from "../components/Button/Button";
import "./Score.css";

const propTypes = {
  startGame: PropTypes.func.isRequired,
  elapsedTime: PropTypes.number.isRequired,
};

const Score = ({ startGame, elapsedTime }) => {
  return (
    <main className="text-button-group">
      <h1 className="title">
        Your Time: <span>{getElapsedSeconds(elapsedTime)}s</span>
      </h1>
      <h2 className="subtitle">{random(gameDoneMessages)}</h2>
      <Button onClick={startGame}>Try Again</Button>
      <h2 className="subtitle small">
        Check out <a href="https://www.marcnitzsche.de/about/">my other projects</a> if you like
        this game.
      </h2>
    </main>
  );
};

Score.propTypes = propTypes;

const gameDoneMessages = [
  "Great job! Why not try again and see if you can beat your own score?",
  "Well done! Can you do it again and set a new high score?",
  "Congratulations! You've completed the game. Can you do it again and improve your time?",
  "You're a true number ninja. Can you do it again and see if you can beat your previous record?",
  "Wow! Why not try again and see if you can do even better this time?",
  "Fantastic! Can you do it again and challenge yourself to reach a new level of excellence?",
];

function getElapsedSeconds(elapsedTime) {
  const elapsedSeconds = elapsedTime / 1000;
  return elapsedSeconds.toFixed(2);
}

export default Score;
