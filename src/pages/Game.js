import React, { Component } from "react";
import PropTypes from "prop-types";

import Timer from "../lib/Timer";
import NumberBox from "../components/NumberBox/NumberBox";

const propTypes = {
  randomNumbers: PropTypes.array.isRequired,
  currentNumber: PropTypes.number.isRequired,
  handleGameClick: PropTypes.func.isRequired
};

export default class Game extends Component {
  componentDidMount() {
    Timer.start();
  }

  componentWillUnmount() {
    Timer.stop();
  }

  render() {
    const { randomNumbers, currentNumber, handleGameClick } = this.props;

    return (
      <main>
        {randomNumbers.map(n => (
          <NumberBox
            n={n}
            key={n}
            currentNumber={currentNumber}
            handleGameClick={handleGameClick}
          />
        ))}
      </main>
    );
  }
}

Game.propTypes = propTypes;
