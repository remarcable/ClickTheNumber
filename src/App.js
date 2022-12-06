import React, { Component, useCallback, useState } from "react";

import { pageNames } from "./pageNames";
import { getPersistedHighscore, updatePersistedHighscore } from "./lib/persistGameData";
import { getRandomRange } from "./lib/getRandomRange";

import Introduction from "./pages/Introduction";
import Score from "./pages/Score";
import Game from "./pages/Game";

import "./App.css";

const BOX_COUNT = 25;

const App = () => {
  const [page, setPage] = useState(pageNames.INTRODUCTION);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [highscore, setHighscore] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const startGame = useCallback(() => {
    setPage(pageNames.GAME);
    setCurrentNumber(0);
    setRandomNumbers(getRandomRange(BOX_COUNT));
    setHighscore(getPersistedHighscore());
  }, []);

  const handleGameClick = useCallback(
    (clickedNumber) => {
      const nextNumber = currentNumber + 1;
      if (clickedNumber === nextNumber) {
        setCurrentNumber(nextNumber);
      }

      if (nextNumber === BOX_COUNT) {
        setPage(pageNames.SCORE);
      }
    },
    [currentNumber]
  );

  const updateElapsedTime = useCallback((elapsedTime) => {
    setElapsedTime(elapsedTime);
    updatePersistedHighscore(elapsedTime);
  }, []);

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
};

export default App;
