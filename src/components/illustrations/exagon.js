import React from "react";

function exagon({ onClick }) {
  return (
    <svg
      viewBox="0 0 223.646 223.646"
      width="15px"
      height="15px"
      onClick={onClick}
    >
      <path d="M111.823 0L16.622 111.823 111.823 223.646 207.025 111.823z"></path>
    </svg>
  );
}

export default exagon;
