import React from "react";
import { getNameOfDeclaration } from "typescript";
import { evidenceNames } from "../constants";
import {transformName} from '../util'

const Button = ({
  className,
  isDisabled = false,
  onClick,
  text = "",
}) => {

  let buttonLabel = evidenceNames[text]
  
  return (
    <button
      className={`${className} flexStart`}
      onClick={onClick}
      // style={{justifyContent:'space-between'}}
      disabled={isDisabled}
      name={text}

    >
      {transformName(buttonLabel)}
    </button>
  );
};

export default Button;
