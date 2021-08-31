import React, { useState } from "react";

function Button(props) {
  const [isMouseOn, setColorOn] = useState(false);
  function handleMouseOut() {
    setColorOn(false);
  }
  function handleMouseOver() {
    setColorOn(true);
  }

  return (
    <button
      type={props.type}
      onClick={props.handleClick}
      style={{ backgroundColor: isMouseOn ? "black" : "white" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.name}
    </button>
  );
}

export default Button;
