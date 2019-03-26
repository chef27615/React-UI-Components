import React from 'react';
import './Header.css';

const HeaderTitle =  ()=>{
    return (
        <div className="cardName">

            <h1>Lambda School</h1>
            <p>@LambdaSchool</p>
            <p>{Date()}</p>
        </div>
    );
};

export default HeaderTitle;