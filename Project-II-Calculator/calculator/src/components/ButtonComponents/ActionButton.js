import React from 'react';
import './Button.css';

const ActionButton = (props)=>{
    return(
        
            <button className = {props.btnStyle}>{props.str}</button>
        
    );
}

export default ActionButton;

