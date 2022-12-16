import React from "react";
import PropTypes from "prop-types";

import { getElapsedSeconds } from "../lib/getElapsedSeconds";
import Button from "../components/Button/Button";

const propTypes = {
  startGame: PropTypes.func,
};

const Introduction = ({ startGame, highscore }) => (
  <main className="text-button-group">
    <h1 className="title">✨ Click The Number</h1>
    <h2 className="subtitle">
      Test your speed and accuracy. Click the numbers in ascending order as fast as you can.
    </h2>
    <Button onClick={startGame}>Start Now</Button>
    {highscore !== null && (
      <h2 className="subtitle small">Your best time so far: {getElapsedSeconds(highscore)}s</h2>
    )}
  </main>
);

Introduction.propTypes = propTypes;

export default Introduction;
