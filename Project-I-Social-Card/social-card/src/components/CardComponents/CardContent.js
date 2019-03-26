import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className = "cardContent">
            <div className= "space"></div>,
            <div className="card-txt">
                <h3>Get start with React</h3>
                <p className= "mid">React makes it painless to create interactive UIs. Design simple views for each state in your application.
                </p>
                <br/>
                <p className="bottom">reactjs.org</p>
            </div>   
        </div> 
    );
};

export default CardContent;