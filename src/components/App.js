import React, { Component } from "react";

import { pages } from "../pages/pages";
import { getRandomRange } from "../lib/getRandomRange";
import Introduction from "../pages/Introduction";
import Score from "../pages/Score";
import Game from "../pages/Game";

import "./App.css";
import { getHighscore, updateHighscore } from "../lib/persistGameData";

const NUMBER_BOX_COUNT = 5;

class App extends Component {
  state = { page: pages.INTRODUCTION, elapsedTime: 0, highscore: null };
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
    const randomNumbers = getRandomRange(NUMBER_BOX_COUNT);
    const highscore = getHighscore();
    this.setState({ page: pages.GAME, currentNumber: 0, randomNumbers, highscore });
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
        {page === pages.INTRODUCTION && <Introduction startGame={startGame} />}

        {page === pages.GAME && (
          <Game
            currentNumber={currentNumber}
            randomNumbers={randomNumbers}
            handleGameClick={handleGameClick}
            updateElapsedTime={updateElapsedTime}
          />
        )}

        {page === pages.SCORE && (
          <Score restartGame={startGame} elapsedTime={elapsedTime} highscore={highscore} />
        )}
      </div>
    );
  }
}

export default App;
