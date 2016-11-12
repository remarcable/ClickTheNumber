import React, { Component } from 'react';
import './NumberBox.css';

export default class NumberBox extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clickedNumber = this.props.n;
    this.props.handleGameClick(clickedNumber);
  }

  render() {
    const { n, currentNumber } = this.props;
    const isClicked = currentNumber >= n;
    const className = `number ${isClicked ? 'active' : ''}`;

    return (<button className={className} onMouseDown={this.handleClick}>{n}</button>);
  }
}

NumberBox.propTypes = {
  n: React.PropTypes.number.isRequired,
  currentNumber: React.PropTypes.number.isRequired,
  handleGameClick: React.PropTypes.func.isRequired,
};
