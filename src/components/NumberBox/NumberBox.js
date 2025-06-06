import React from "react";
import classnames from "classnames";

import "./NumberBox.css";

/**
 * @typedef {Object} NumberBoxProps
 * @property {number} n - The number displayed on the button.
 * @property {number} currentNumber - The current number in the game sequence.
 * @property {(number: number) => void} handleGameClick - Function to call when the button is clicked, passing the number `n`.
 */

/**
 * A component representing a clickable number box in the game.
 * @param {NumberBoxProps} props - The props for the NumberBox component.
 */
const NumberBox = ({ n, currentNumber, handleGameClick }) => (
  <button
    className={classnames("number", { glowing: n === currentNumber + 1 })}
    onClick={() => handleGameClick(n)} // Changed from onMouseDown to onClick
    disabled={currentNumber >= n}
  >
    {n}
  </button>
);

export default NumberBox;
