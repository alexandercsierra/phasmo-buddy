import React from "react";

const Button = ({
  className,
  isDisabled = false,
  onClick,
  text = ""
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={isDisabled}
      name={text}
    >
      {text}
    </button>
  );
};

export default Button;
