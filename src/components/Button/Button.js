import React from "react";
import "./Button.css";

/**
 * @typedef {Object} ButtonProps
 * @property {() => void} onClick - Function to call when the button is clicked.
 * @property {React.ReactNode} children - The content to display inside the button.
 */

/**
 * A simple button component.
 * @param {ButtonProps} props - The props for the Button component.
 */
const Button = ({ children, onClick }) => {
  return (
    <button type="button" className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
