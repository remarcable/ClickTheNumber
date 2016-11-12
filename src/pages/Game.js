import React, { Component } from 'react';
import Number from '../components/Number';
import Timer from '../lib/Timer';

export default class Game extends Component {
  componentDidMount() {
    Timer.start();
  }

  componentWillUnmount() {
    Timer.stop();
  }

  render() {
    const { randomNumbers, currentNumber, handleGameClick } = this.props;

    return (
      <main>
        { randomNumbers.map(n => <Number n={n} key={n} currentNumber={currentNumber} handleGameClick={handleGameClick} />) }
      </main>
    );
  }
}
