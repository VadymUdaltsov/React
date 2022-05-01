import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a href='/profile'>Profile</a>
            </div>
            <div>
                <a href='/dialogs'>Messages</a>
            </div>
            <div>
                <a href='#s'>News</a> { /* className={`${s.item} ${s.active}`} */ /* так мы пишем если два класса */ } 
            </div>
            <div>
                <a href='#s'>Music</a>
            </div>
            <div>
                <a href='#s'>Settings</a>
            </div>
        </nav>
    ) 
    
}

export default Navbar;