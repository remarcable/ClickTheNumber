import React from 'react';
import Button from '../components/Button/Button';
import './Introduction.css';

export default function Introduction(props) {
  return (
    <main className="introduction">
      <h1 className="title">Click The Number!</h1>
      <h2 className="subtitle">As fast as possible, click the numbers in ascending order.</h2>
      <Button onClick={props.startGame}>Start Game.</Button>
      <Button isSmall onClick={props.goFullscreen}>Go Fullscreen first</Button>
    </main>
  );
}

Introduction.propTypes = {
  startGame: React.PropTypes.func,
  goFullscreen: React.PropTypes.func,
};
