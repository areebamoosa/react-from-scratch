import React from "react";

const Button = (props) => {
  return (
    <div>
      <button style={{ backgroundColor: props.color }}> {props.text} </button>
    </div>
  );
};

export default Button;
