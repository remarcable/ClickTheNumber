import React, { Component } from "react";

import { pages } from "../pages/pages";
import PageRenderer from "../pages/PageRenderer";
import randomRange from "../lib/RandomRange";

import "./App.css";

const NUMBER_BOX_COUNT = 5;

class App extends Component {
  state = { page: pages.INTRODUCTION, elapsedTime: 0 };
  handleGameClick = (clickedNumber) => {
    const { currentNumber } = this.state;
    const nextNumber = currentNumber + 1;
    if (clickedNumber === nextNumber) {
      this.setState({ currentNumber: nextNumber });
    }

    if (nextNumber === NUMBER_BOX_COUNT) {
      this.setState({ page: pages.SCORE });
    }
  };

  startGame = () => {
    const randomNumbers = randomRange(NUMBER_BOX_COUNT);
    this.setState({ page: pages.GAME, currentNumber: 0, randomNumbers });
  };

  updateElapsedTime = (elapsedTime) => {
    this.setState({ elapsedTime });
  };

  render() {
    return (
      <div className="App">
        <PageRenderer
          currentState={this.state}
          handleGameClick={this.handleGameClick}
          startGame={this.startGame}
          updateElapsedTime={this.updateElapsedTime}
        />
      </div>
    );
  }
}

export default App;
