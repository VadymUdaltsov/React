import React from 'react';
import s from './Navbar.module.css';

/* NavLink замена обычной линке a, но лучше неё */
/* Синтаксис <NavLink to='/link'></NavLink> */

const FriendsLink = (props) => {
    return (
        <div className={s.friends__link}><img src='https://img.favpng.com/0/9/22/computer-icons-user-profile-clip-art-login-png-favpng-uFvp1vcYYXhXh1gMT3Cai7ikf.jpg' alt='user'></img>{props.user}</div>
    )
}; /* В React V-6 именно так добавляется стиль для активной NavLink, я вынес это в компаненту так как так легче её вставлять */

export default FriendsLink;