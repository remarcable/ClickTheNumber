import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.css';

const propTypes = {
  isLifted: PropTypes.bool,
  isSmall: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

const Button = ({ isLifted, isSmall, children, onClick }) => (
  <button
    type="button"
    className={classnames('btn', { lifted: isLifted, small: isSmall })}
    onClick={onClick}
  >
    {children}
  </button>
  );

Button.propTypes = propTypes;

export default Button;
