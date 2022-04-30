import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a href='#s'>Profile</a>
            </div>
            <div>
                <a className={s.item} href='#s'>Messages</a>
            </div>
            <div>
                <a className={`${s.item} ${s.active}`} href='#s'>News</a> {/* так мы пишем если два класса */}
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