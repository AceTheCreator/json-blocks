import React from "react";

function circle({ onClick }) {
  return (
    <svg viewBox="0 0 512 512" width="15px" height="15px" onClick={onClick}>
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
    </svg>
  );
}

export default circle;
