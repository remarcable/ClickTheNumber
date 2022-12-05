import React from "react";
import PropTypes from "prop-types";
import random from "just-random";

import Button from "../components/Button/Button";
import "./Score.css";

const propTypes = {
  showIntroduction: PropTypes.func.isRequired,
  elapsedTime: PropTypes.number.isRequired,
};

const Score = ({ showIntroduction, elapsedTime }) => {
  return (
    <main>
      <div className="done">
        Your time: {getElapsedSeconds(elapsedTime)}s – {random(gameDoneMessages)}
      </div>
      <Button onClick={showIntroduction} isLifted>
        Restart
      </Button>
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
