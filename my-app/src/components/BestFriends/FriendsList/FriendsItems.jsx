import React from "react";
import s from '../FriendsStyle.module.css'

const FriendsItems = (props) => {
    return (
        <div className={s.friends} >
            <div className={s.friends__items}><img src='https://img.favpng.com/0/9/22/computer-icons-user-profile-clip-art-login-png-favpng-uFvp1vcYYXhXh1gMT3Cai7ikf.jpg' alt='user'></img>{props.user}</div>
        </div>
    )
};

export default FriendsItems;