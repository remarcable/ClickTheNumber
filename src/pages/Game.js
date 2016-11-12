import React, { Component } from 'react';
import NumberBox from '../components/NumberBox';
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
        { randomNumbers.map(n =>
          <NumberBox
            n={n}
            key={n}
            currentNumber={currentNumber}
            handleGameClick={handleGameClick}
          />) }
      </main>
    );
  }
}

Game.propTypes = {
  randomNumbers: React.PropTypes.array.isRequired,
  currentNumber: React.PropTypes.number.isRequired,
  handleGameClick: React.PropTypes.func.isRequired,
};
