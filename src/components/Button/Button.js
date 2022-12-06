import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

const Button = ({ children, onClick }) => (
  <button type="button" className="btn" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = propTypes;

export default Button;
