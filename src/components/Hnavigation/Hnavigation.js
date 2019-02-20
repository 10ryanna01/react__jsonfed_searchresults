import React from "react";
import Button from "../Button/Button";
const Hnavigation = ({ 
  extraClassName,
    navitem1,
    navitem2,
    navitem3,
    navitem1Link,
    navitem2Link,
    navitem3Link,
    freeText,  }) => (
<div>
    <ul className={extraClassName}>
  <li className="drover-nav__item">
    <a className="drover-nav__item__link active" href={navitem1Link}>{navitem1}</a>
  </li> 

  <li className=" drover-nav__item">
    <a className="drover-nav__item__link" href={navitem2Link}>{navitem2}</a>
  </li>
  <li className=" drover-nav__item">
    <a className="drover-nav__item__link" href={navitem3Link}>{navitem3}</a>
  </li>
  <li className=" drover-nav__item">
    <a className="drover-nav__item__link p-0" href="#/join">
    {/* //reusing this button #yay */}
    <Button freeText={freeText} extraClassName="primaryCTA " />      
    </a>
  </li>
</ul>

</div>
 
);

export default Hnavigation;
