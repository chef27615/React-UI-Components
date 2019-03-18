import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';


const HeaderContainer = () =>{
    return(
        <header className="header-container">
            <HeaderTitle />
            <HeaderContent />
            <ImageThumbnail />
        </header>
    );
};

export default HeaderContainer;