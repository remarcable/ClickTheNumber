import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./NumberBox.css";

const propTypes = {
  n: PropTypes.number.isRequired,
  currentNumber: PropTypes.number.isRequired,
  handleGameClick: PropTypes.func.isRequired,
};

const NumberBox = ({ n, currentNumber, handleGameClick }) => (
  <button
    className={classnames("number", { active: currentNumber >= n })}
    onMouseDown={() => handleGameClick(n)}
  >
    {n}
  </button>
);

NumberBox.propTypes = propTypes;

export default NumberBox;
