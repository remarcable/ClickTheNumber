import React, { Component } from 'react';

export default class Number extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const n = this.props.n;
    this.props.handleGameClick(n);
  }

  render() {
    const { n, currentNumber } = this.props;
    const isClicked = currentNumber >= n;
    const className = `number ${isClicked ? 'active' : ''}`;

    return (<div className={className} onMouseDown={this.handleClick}>{n}</div>);
  }
}
