import React from "react";
import { getElapsedSeconds } from "../lib/getElapsedSeconds";
import Button from "../components/Button/Button";

/**
 * @typedef {Object} IntroductionProps
 * @property {() => void} startGame - Function to call when the start button is clicked.
 * @property {number | null} highscore - The current highscore, or null if no game played yet.
 */

/**
 * Displays the introduction screen with a start button and high score.
 * @param {IntroductionProps} props - The props for the Introduction component.
 */
const Introduction = ({ startGame, highscore }) => (
  <main className="text-button-group">
    <h1 className="title">✨ Click The Number</h1>
    <h2 className="subtitle">
      Test your speed and accuracy. Click the numbers in ascending order as fast
      as you can.
    </h2>
    <Button onClick={startGame}>Start Now</Button>
    {highscore !== null && (
      <h2 className="subtitle small">
        Your best time so far: {getElapsedSeconds(highscore)}s
      </h2>
    )}
  </main>
);

export default Introduction;
