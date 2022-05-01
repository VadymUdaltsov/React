import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a href='/content'>Profile</a>
            </div>
            <div>
                <a href='/dialogs'>Messages</a>
            </div>
            <div>
                <a href='/news'>News</a> { /* className={`${s.item} ${s.active}`} */ /* так мы пишем если два класса */ } 
            </div>
            <div>
                <a href='/music'>Music</a>
            </div>
            <div>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    ) 
    
}

export default Navbar;