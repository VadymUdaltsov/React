import React from 'react';
import { NavLink } from 'react-router-dom'; /* обязательный импорт */
import s from '../Dialogs.module.css'

/* NavLink замена обычной линке a, но лучше неё */
/* Синтаксис <NavLink to='/link'></NavLink> */

const DialogLinks = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={props.url} style={({ isActive }) => {
                return { color: isActive ? 'gold' : '' }}}>
                <img src="https://img.favpng.com/0/9/22/computer-icons-user-profile-clip-art-login-png-favpng-uFvp1vcYYXhXh1gMT3Cai7ikf.jpg" alt="user" />
                    {props.user}
            </NavLink>
        </div>
    )
}; /* В React V-6 именно так добавляется стиль для активной NavLink, я вынес это в компаненту так как так легче её вставлять */

export default DialogLinks;