import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';


const HeaderContainer = () =>{
    return(
        <header className="header-container">
            <div className="imgDiv">
              <ImageThumbnail />  
            </div>
            <div className="txt-container">
            <HeaderTitle />
            <HeaderContent />
            </div>
        </header>
    );
};

export default HeaderContainer;