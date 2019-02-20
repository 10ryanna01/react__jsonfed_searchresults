import React from "react";

const Button = ({ freeText, extraClassName }) => (
  <button className={extraClassName}>{`${freeText}`}</button>
);

export default Button;
