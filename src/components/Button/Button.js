import React from 'react';
import './Button.css';

export default function Button(props) {
  const showLifted = props.isLifted ? 'lifted' : '';
  const showSmall = props.isSmall ? 'small' : '';
  const className = `btn ${showLifted} ${showSmall}`;
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
  isSmall: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};
