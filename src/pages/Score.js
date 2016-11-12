import React from 'react';
import random from 'just-random';
import Button from '../components/Button/Button';
import Timer from '../lib/Timer';
import './Score.css';

export default function Score(props) {
  const elapsedSeconds = (Timer.getElapsed() / 1000).toPrecision(3);
  const gameDoneMessages = ['You did it!', 'Alright!', 'Awesome!', 'What the fuck.', 'Amazing!', 'Did you beat the boss?', 'This horse is amazing!'];
  const currentMessage = random(gameDoneMessages);

  return (
    <main>
      <div className="done">
        {currentMessage} Your time: {elapsedSeconds}s
      </div>
      <Button onClick={props.showIntroduction} isLifted>New Game</Button>
    </main>
  );
}

Score.propTypes = {
  showIntroduction: React.PropTypes.func,
};
