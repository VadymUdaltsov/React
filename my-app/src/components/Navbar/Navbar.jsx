import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'; /* обязательный импорт */

const ActiveStyle = (props) => {
    return (
    <NavLink to={props.url} style={({ isActive }) => {
        return { color: isActive ? 'gold' : '' }
    }}>{props.message}</NavLink>
    )
    }; /* В React V-6 именно так добавляется стиль для активной NavLink, я вынес это в компаненту так как так легче её вставлять */

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <ActiveStyle url="content" message="Profile"  />{/* NavLink замена обычной линке a, но лучше неё */}
                {/* Синтаксис <NavLink to='/link'></NavLink> */}
            </div>
            <div className={s.item}>
                <ActiveStyle url="dialogs" message="Messages" />
            </div>
            <div className={s.item}>
                <ActiveStyle url="news" message="News" /> { /* className={`${s.item} ${s.active}`} */ /* так мы пишем если два класса */ } 
            </div>
            <div className={s.item}>
                <ActiveStyle url="music" message="Music" />
            </div>
            <div className={s.item}>
                <ActiveStyle url="setting" message="Setting" />
            </div>
        </nav>
    ) 
    
}

export default Navbar;