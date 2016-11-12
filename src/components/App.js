import React, { Component } from 'react';
import Introduction from '../pages/Introduction';
import Game from '../pages/Game';
import Score from '../pages/Score';
import randomRange from '../lib/RandomRange';
import './App.css';

class App extends Component {
  constructor(props, state) {
    super(props, state);

    const randomNumbers = randomRange(25);
    this.state = {
      page: 'Game',
      currentNumber: 0,
      randomNumbers,
    };

    this.handleGameClick = this.handleGameClick.bind(this);
  }

  handleGameClick(n) {
    const { currentNumber } = this.state;
    if (n === currentNumber + 1) {
      this.setState({ currentNumber: currentNumber + 1 })
    }
  }

  render() {
    const currentPage = () => {
      const state = this.state;
      let page;

      switch (state.page) {
      case 'Introduction':
        page = <Introduction />;
        break;
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
        page = <Score />;
        break;
      default:
        page = <Introduction />;
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
