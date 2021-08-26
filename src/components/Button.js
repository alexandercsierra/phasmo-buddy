import React from "react";
import { evidenceNames } from "../constants";

const Button = ({
  className,
  isDisabled = false,
  onClick,
  text = ""
}) => {

  if(text==="spirit box"){
    text = "spirit_box"
  }
  if(text==="D.O.T.S."){
    text = "dots"
  }

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
