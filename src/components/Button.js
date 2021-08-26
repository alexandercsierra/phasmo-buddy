import React from "react";
import { evidenceNames } from "../constants";

const Button = ({
  className,
  isDisabled = false,
  onClick,
  text = ""
}) => {


  return (
    <button
      className={`${className} flexStart`}
      onClick={onClick}
      disabled={isDisabled}
      name={text}
    >
      {evidenceNames[text]}
    </button>
  );
};

export default Button;
