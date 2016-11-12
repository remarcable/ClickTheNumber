import React, { Component } from 'react';
import random from 'just-random';
import Timer from '../lib/Timer';

export default class Score extends Component {
  render() {
    const elapsedSeconds = (Timer.getElapsed() / 1000).toPrecision(3);
    const gameDoneMessages = ['You did it!', 'Alright!', 'Awesome!', 'What the fuck.', 'Amazing!', 'Did you beat the boss?', 'This horse is amazing!'];
    const currentMessage = random(gameDoneMessages);

    return (
      <main>
        <div className="done">
          {currentMessage} Your time: {elapsedSeconds}s
        </div>
        <button type="button" name="button" className="btn new" onClick={this.props.showIntroduction}>New Game</button>
      </main>
    );
  }
}
