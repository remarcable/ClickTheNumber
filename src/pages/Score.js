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
      <h2 className="subtitle">
        {random(gameDoneMessages)} If you like this game, also check out{" "}
        <a href="https://www.marcnitzsche.de/about/">my other projects</a>.
      </h2>
      <Button onClick={startGame}>Try Again</Button>
    </main>
  );
};

Score.propTypes = propTypes;

const gameDoneMessages = [
  "Well done!",
  "Really good!",
  "Awesome!",
  "Excellent!",
  "Good job!",
  "Bravo!",
  "Fantastic!",
  "Keep it up!",
];

function getElapsedSeconds(elapsedTime) {
  const elapsedSeconds = elapsedTime / 1000;
  return elapsedSeconds.toFixed(2);
}

export default Score;
