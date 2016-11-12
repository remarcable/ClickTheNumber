import React from 'react';
import './Button.css';

export default function Button(props) {
  const showLifted = props.isLifted ? 'lifted' : '';
  const className = `btn ${showLifted}`;
  return (
    <button
      type="button"
      className={className}
      onClick={props.onClick}
    >{props.children}
    </button>
  );
}

Button.propTypes = {
  isLifted: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};
