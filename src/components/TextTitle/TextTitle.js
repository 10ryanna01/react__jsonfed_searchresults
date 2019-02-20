import React from "react";

const TextTitle = ({ freeText, extraClassName }) => (
  <h1 className={extraClassName}>{`${freeText}`}</h1>
);

export default TextTitle;
