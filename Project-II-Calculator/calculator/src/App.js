import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const funcKeys = [
  { name: "plus", value: "+" },
  { name: "sub", value: "-" },
  { name: "mult", value: "x" },
  { name: "dive", value: "➗" },
  { name: "cal", value: "enter" }
];


const App = () => {
  return (
    <div className="fields">
      {/* <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
      <CalculatorDisplay ah = 'calDisplay' disment = '0'/>

      <NumberButton newStyle='nbtn btn-z' inner='0'/>
      <NumberButton newStyle='nbtn btn-1' inner='1'/>
      <NumberButton newStyle='nbtn btn-2' inner='2'/>
      <NumberButton newStyle='nbtn btn-3' inner='3'/>
      <NumberButton newStyle='nbtn btn-4' inner='4'/>
      <NumberButton newStyle='nbtn btn-5' inner='5'/>
      <NumberButton newStyle='nbtn btn-6' inner='6'/>
      <NumberButton newStyle='nbtn btn-7' inner='7'/>
      <NumberButton newStyle='nbtn btn-8' inner='8'/>
      <NumberButton newStyle='nbtn btn-9' inner='9'/>
      <NumberButton newStyle='nbtn btn-clear' inner='clear'/>

      <div className="functionKeyContainer">
        {funcKeys.map( (value, name)=>(<ActionButton key={name} desc={value} />)  )}

      </div>
      

    </div>
  );
};

export default App;
