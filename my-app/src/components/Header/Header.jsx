import React from 'react';
import s from'./Header.module.css';

const Header = () => {
    return (
    <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/2000px-NBC_logo.svg.png" alt="logo" />
    </header>
    ) 
    
}

export default Header;