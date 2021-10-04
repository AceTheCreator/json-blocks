import React from "react";

function line({ onClick }) {
  return (
    <svg viewBox="0 0 6 6" width="15px" height="15px" onClick={onClick}>
      <line
        x1="0"
        y1="3"
        x2="6"
        y2="3"
        stroke="currentColor"
        stroke-linecap="round"
      ></line>
    </svg>
  );
}

export default line;
