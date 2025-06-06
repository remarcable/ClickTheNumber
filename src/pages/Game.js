import React, { useEffect } from "react";
// PropTypes import removed
import classnames from "classnames"; // This import was missing in the previous attempt, but present in the original. Keeping it if needed by NumberBox or other logic.

import Timer from "../lib/Timer";
import NumberBox from "../components/NumberBox/NumberBox";

/**
 * @typedef {Object} GameProps
 * @property {number[]} randomNumbers - Array of numbers to display.
 * @property {number} currentNumber - The current number the user is trying to find.
 * @property {(number) => void} handleGameClick - Function to call when a number box is clicked, passing the number `n`.
 * @property {(elapsedTime: number) => void} updateElapsedTime - Function to update the elapsed time.
 */

/**
 * Game component displays the grid of numbers for the user to click.
 * @param {GameProps} props - The props for the Game component.
 */
const Game = ({ randomNumbers, currentNumber, handleGameClick, updateElapsedTime }) => {
  useEffect(() => {
    Timer.start();
    return () => {
      Timer.stop();
      updateElapsedTime(Timer.getElapsed());
    };
  }, [updateElapsedTime]); // Added updateElapsedTime to dependencies array

  return (
    <main className="numbers-wrapper">
      {randomNumbers.map((n) => (
        <NumberBox
          key={n}
          n={n}
          currentNumber={currentNumber}
          handleGameClick={handleGameClick}
        />
      ))}
    </main>
  );
};

// PropTypes definition removed
// Game.propTypes = propTypes; // This line is removed

export default Game;
