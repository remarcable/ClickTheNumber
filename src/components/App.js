import React, { Component } from 'react';
import classnames from 'classnames';

import Footer from '../components/Footer/Footer';
import PageRenderer from '../pages/PageRenderer';
import goFullscreen from '../lib/goFullscreen';
import randomRange from '../lib/RandomRange';

import './App.css';

const NUMBER_BOX_COUNT = 25;

class App extends Component {
  state = { page: 'Introduction' };
  handleGameClick = (clickedNumber) => {
    const { currentNumber } = this.state;
    const nextNumber = currentNumber + 1;
    if (clickedNumber === nextNumber) {
      this.setState({ currentNumber: nextNumber });
    }

    if (nextNumber === NUMBER_BOX_COUNT) {
      this.setState({ page: 'Score' });
    }
  }

  startGame = () => {
    const randomNumbers = randomRange(NUMBER_BOX_COUNT);
    this.setState({ page: 'Game', currentNumber: 0, randomNumbers });
  }

  showIntroduction = () => {
    this.setState({ page: 'Introduction' });
  }

  render() {
    return (
      <div className={classnames('App', { doneBody: this.state.page === 'Score' })}>
        <Footer />
        <PageRenderer
          currentState={this.state}
          handleGameClick={this.handleGameClick}
          startGame={this.startGame}
          showIntroduction={this.showIntroduction}
          goFullscreen={goFullscreen}
        />
      </div>
    );
  }
}

export default App;
