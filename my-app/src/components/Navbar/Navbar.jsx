import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'; /* обязательный импорт */

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/content'>Profile</NavLink> {/* NavLink замена обычной линке a, но лучше неё */}
                {/* Синтаксис <NavLink to='/link'></NavLink> */}
            </div>
            <div>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news'>News</NavLink> { /* className={`${s.item} ${s.active}`} */ /* так мы пишем если два класса */ } 
            </div>
            <div>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    ) 
    
}

export default Navbar;