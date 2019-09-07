import React from "react";
import PropTypes from "prop-types";
import Button from "../components/Button/Button";
import "./Introduction.css";

const propTypes = {
  startGame: PropTypes.func,
  goFullscreen: PropTypes.func
};

const Introduction = ({ startGame, goFullscreen }) => (
  <main className="introduction">
    <h1 className="title">Click The Number!</h1>
    <h2 className="subtitle">As fast as possible, click the numbers in ascending order.</h2>
    <Button onClick={startGame}>Start Game.</Button>
    <Button isSmall onClick={goFullscreen}>
      Go Fullscreen first
    </Button>
  </main>
);

Introduction.propTypes = propTypes;

export default Introduction;
