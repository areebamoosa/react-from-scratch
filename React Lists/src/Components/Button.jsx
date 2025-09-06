import React from "react";

const Button = ({ onAdd }) => {
  return (
    <div>
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default Button;
