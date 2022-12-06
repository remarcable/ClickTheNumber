import React from "react";
import PropTypes from "prop-types";

import Button from "../components/Button/Button";

const propTypes = {
  startGame: PropTypes.func,
};

const Introduction = ({ startGame }) => (
  <main className="text-button-group">
    <h1 className="title">✨ Click The Number</h1>
    <h2 className="subtitle">
      Test your speed and accuracy with this delightful random number game.
    </h2>
    <Button onClick={startGame}>Start Now</Button>
  </main>
);

Introduction.propTypes = propTypes;

export default Introduction;
