import React, { Component } from 'react';
import Footer from '../components/Footer';
import PageRenderer from '../pages/PageRenderer';
import randomRange from '../lib/RandomRange';
import './App.css';

class App extends Component {
  constructor(props, state) {
    super(props, state);

    this.state = {
      page: 'Introduction',
    };

    this.handleGameClick = this.handleGameClick.bind(this);
    this.startGame = this.startGame.bind(this);
    this.showIntroduction = this.showIntroduction.bind(this);
  }

  handleGameClick(clickedNumber) {
    const { currentNumber } = this.state;
    const nextNumber = currentNumber + 1;
    if (clickedNumber === nextNumber) {
      this.setState({ currentNumber: nextNumber });
    }

    if (nextNumber === 25) {
      this.setState({ page: 'Score' });
    }
  }

  startGame() {
    const randomNumbers = randomRange(25);
    this.setState({ page: 'Game', currentNumber: 0, randomNumbers });
  }

  showIntroduction() {
    this.setState({ page: 'Introduction' });
  }

  render() {
    const showDone = this.state.page === 'Score' ? 'doneBody' : '';
    const className = `App ${showDone}`;

    return (
      <div className={className}>
        <Footer />
        <PageRenderer
          currentState={this.state}
          handleGameClick={this.handleGameClick}
          startGame={this.startGame}
          showIntroduction={this.showIntroduction}
        />
      </div>
    );
  }
}

export default App;
