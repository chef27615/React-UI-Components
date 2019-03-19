import React from 'react';
import './Button.css';

const NumberButton = () =>{
    return(
    <div className="numPad">
      <button className="nbtn btn-z">0</button>
      <button className="nbtn btn-1">1</button>
      <button className="nbtn btn-2">2</button>
      <button className="nbtn btn-3">3</button>
      <button className="nbtn btn-4">4</button>
      <button className="nbtn btn-5">5</button>
      <button className="nbtn btn-6">6</button>
      <button className="nbtn btn-7">7</button>
      <button className="nbtn btn-8">8</button>
      <button className="nbtn btn-9">9</button>
      <button className="nbtn btn-clear">Clear</button>
    </div>
    );
}

export default NumberButton;