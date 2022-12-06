import React from "react";
import PropTypes from "prop-types";

import "./NumberBox.css";

const propTypes = {
  n: PropTypes.number.isRequired,
  currentNumber: PropTypes.number.isRequired,
  handleGameClick: PropTypes.func.isRequired,
};

const NumberBox = ({ n, currentNumber, handleGameClick }) => (
  <button className="number" onMouseDown={() => handleGameClick(n)} disabled={currentNumber >= n}>
    {n}
  </button>
);

NumberBox.propTypes = propTypes;

export default NumberBox;
