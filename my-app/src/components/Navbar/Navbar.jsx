import React from 'react';
import s from './Navbar.module.css';
import ActiveLink from './Link';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <ActiveLink url="content" message="Profile" />
            </div>
            <div className={s.item}>
                <ActiveLink url="dialogs" message="Messages" />
            </div>
            <div className={s.item}>
                <ActiveLink url="news" message="News" /> { /* className={`${s.item} ${s.active}`} */ /* так мы пишем если два класса */}
            </div>
            <div className={s.item}>
                <ActiveLink url="music" message="Music" />
            </div>
            <div className={s.item}>
                <ActiveLink url="setting" message="Setting" />
            </div>
        </nav>
    )

}

export default Navbar;