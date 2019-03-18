import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';


const HeaderContainer = () =>{
    return(
        <header className="header-container">
            
            <ImageThumbnail />
            <div className="txt-container">
            <HeaderTitle />
            <HeaderContent />
            </div>
        </header>
    );
};

export default HeaderContainer;