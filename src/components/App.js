import React, { Component } from 'react';
import Introduction from '../pages/Introduction';
import Game from '../pages/Game';
import Score from '../pages/Score';
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

  handleGameClick(n) {
    const { currentNumber } = this.state;
    const nextNumber = currentNumber + 1;
    if (n === nextNumber) {
      this.setState({ currentNumber: currentNumber + 1 })
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
    const currentPage = () => {
      const state = this.state;
      let page;

      switch (state.page) {
      case 'Game':
        page = (
          <Game
            currentNumber={state.currentNumber}
            randomNumbers={state.randomNumbers}
            handleGameClick={this.handleGameClick}
          />
        );
        break;
      case 'Score':
        page = <Score showIntroduction={this.showIntroduction} />;
        break;
      default: // = case 'Introduction'
        page = <Introduction startGame={this.startGame} />;
      }

      return page;
    };

    return (
      <div className="App">
        <header className="github">
          Made with ♡ by <a rel="noopener noreferrer" target="_blank" href="https://github.com/lightningboss/ClickTheNumber">LightningBoss</a>
        </header>
        { currentPage() }
      </div>
    );
  }
}

export default App;
