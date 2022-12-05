import React from "react";
import goFullscreen from "../lib/goFullscreen";
import "./FullscreenButton.css";

const FullscreenButton = () => (
  <button type="button" onClick={goFullscreen} className="fullscreen-button" alt="Go Fullscreen">
    <FullscreenIcon />
  </button>
);

const FullscreenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white">
    <path d="M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z" />
  </svg>
);

export default FullscreenButton;
