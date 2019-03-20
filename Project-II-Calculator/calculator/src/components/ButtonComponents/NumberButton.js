import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return(
    
      <button className={props.newStyle}>{props.inner}</button>
    
  );
}


export default NumberButton;



