import React from "react";

const Button = ({
  background = "#dee5e8",
  isDisabled = false,
  onClick,
  text = ""
}) => {
  return (
    <button
      className="button"
      style={{ background }}
      onClick={onClick}
      disabled={isDisabled}
      name={text}
    >
      {text}
    </button>
  );
};

export default Button;
