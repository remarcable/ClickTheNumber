import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <main>
          <h1 className="title">Click The Number!</h1>
          <h2 className="subtitle">As fast as possible, click the numbers in ascending order.</h2>
          <button type="button" name="button" className="btn">Start Game.</button>
      </main>
    );
  }
}
