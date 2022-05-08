import React from 'react';
import s from './Navbar.module.css';
import ActiveLink from './Link';
import FriendsLink from './FriendsLink';

const Navbar = (props) => {

    let FriendsElements = props.state.bestFriends.map(friends => <FriendsLink user={friends.name} />)

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
            <div className={s.friends}>
                <ActiveLink url="friends" message="Friends:" />
                <div className={s.friends__item}>{FriendsElements}</div>
            </div>
        </nav>
    )

}

export default Navbar;