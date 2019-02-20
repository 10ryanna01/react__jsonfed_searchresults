import React from 'react';

const HelloWorld = ({name, extraClassName }) => (
 <div className={extraClassName}>
 {`Hi ${name}`}
 </div>
);


export default HelloWorld;