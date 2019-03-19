import React from 'react';
import './Button.css';

const ActionButton = ()=>{
    return(
        <div className="Action-btn">
            <button className="cbtn">&divide;</button>
            <button className="cbtn">x</button>
            <button className="cbtn">-</button>
            <button className="cbtn">+</button>
            <button className="cbtn">=</button>
        </div>
    );
}

export default ActionButton;