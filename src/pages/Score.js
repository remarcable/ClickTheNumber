import React from 'react';
import PropTypes from 'prop-types';
import random from 'just-random';

import Button from '../components/Button/Button';
import Timer from '../lib/Timer';

import './Score.css';

const propTypes = {
  showIntroduction: PropTypes.func,
};

const Score = ({ showIntroduction }) => {
  return (
    <main>
      <div className="done">
        {random(gameDoneMessages)} Your time: {getElapsedSeconds(Timer)}s
      </div>
      <Button onClick={showIntroduction} isLifted>New Game</Button>
    </main>
  );
}

Score.propTypes = propTypes;

const gameDoneMessages = [
  'You did it!',
  'Alright!',
  'Awesome!',
  'What the fuck.',
  'Amazing!',
  'Did you beat the boss?',
  'This horse is amazing!',
];

function getElapsedSeconds(Timer) {
  return (Timer.getElapsed() / 1000).toPrecision(3);
}

export default Score;
