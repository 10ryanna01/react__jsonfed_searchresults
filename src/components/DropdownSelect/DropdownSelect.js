import React from "react";

const DropdownSelect = ({ freeText, extraClassName }) => (

<div className={extraClassName}>

    <select className="searchdropdown">
  <option>{freeText}</option>
  <option value="1">option1</option>
  <option value="2">option2</option>
  <option value="3">option3</option>
  <option value="4">option4</option>
  <option value="5">option5</option>
</select>
 </div>
);

export default DropdownSelect;
