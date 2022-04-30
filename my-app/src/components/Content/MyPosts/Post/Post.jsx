import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://img.favpng.com/0/9/22/computer-icons-user-profile-clip-art-login-png-favpng-uFvp1vcYYXhXh1gMT3Cai7ikf.jpg" alt="avatar" />
            {props.message}
            
            <div>
                <span>likes: {props.value}</span>
            </div>
        </div>
        
    ) 
}


export default Post;