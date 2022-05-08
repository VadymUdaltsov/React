import React from 'react';
import { NavLink } from 'react-router-dom'; /* обязательный импорт */

/* NavLink замена обычной линке a, но лучше неё */
/* Синтаксис <NavLink to='/link'></NavLink> */ 

const ActiveLink = (props) => {
    return (
            <NavLink to={props.url} style={({ isActive }) => {
                return { color: isActive ? 'gold' : '' }
            }}>{props.message}</NavLink>
        
    )
}; /* В React V-6 именно так добавляется стиль для активной NavLink, я вынес это в компаненту так как так легче её вставлять */

export default ActiveLink;;
