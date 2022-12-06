import React, { Component } from "react";

import { pageNames } from "./pageNames";
import { getHighscore, updateHighscore } from "./lib/persistGameData";
import { getRandomRange } from "./lib/getRandomRange";

import Introduction from "./pages/Introduction";
import Score from "./pages/Score";
import Game from "./pages/Game";

import "./App.css";

const NUMBER_BOX_COUNT = 5;

class App extends Component {
  state = { page: pageNames.INTRODUCTION, elapsedTime: 0, highscore: null };
  handleGameClick = (clickedNumber) => {
    const { currentNumber } = this.state;
    const nextNumber = currentNumber + 1;
    if (clickedNumber === nextNumber) {
      this.setState({ currentNumber: nextNumber });
    }

    if (nextNumber === NUMBER_BOX_COUNT) {
      this.setState({ page: pageNames.SCORE });
    }
  };

  startGame = () => {
    const randomNumbers = getRandomRange(NUMBER_BOX_COUNT);
    const highscore = getHighscore();
    this.setState({ page: pageNames.GAME, currentNumber: 0, randomNumbers, highscore });
  };

  updateElapsedTime = (elapsedTime) => {
    this.setState({ elapsedTime });
    updateHighscore(elapsedTime);
  };

  render() {
    const { page, currentNumber, randomNumbers, elapsedTime, highscore } = this.state;
    const { handleGameClick, startGame, updateElapsedTime } = this;

    return (
      <div className="App">
        {page === pageNames.INTRODUCTION && <Introduction startGame={startGame} />}

        {page === pageNames.GAME && (
          <Game
            currentNumber={currentNumber}
            randomNumbers={randomNumbers}
            handleGameClick={handleGameClick}
            updateElapsedTime={updateElapsedTime}
          />
        )}

        {page === pageNames.SCORE && (
          <Score restartGame={startGame} elapsedTime={elapsedTime} highscore={highscore} />
        )}
      </div>
    );
  }
}

export default App;
