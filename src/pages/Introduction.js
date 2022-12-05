import React from "react";
import PropTypes from "prop-types";
import Button from "../components/Button/Button";
import "./Introduction.css";

const propTypes = {
  startGame: PropTypes.func,
};

const Introduction = ({ startGame }) => (
  <main className="introduction">
    <h1 className="title">Click The Number</h1>
    <h2 className="subtitle">Click them in ascending order</h2>
    <Button onClick={startGame}>Start Now</Button>
  </main>
);

Introduction.propTypes = propTypes;

export default Introduction;
