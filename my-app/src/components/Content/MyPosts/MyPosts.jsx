import React from 'react';
import s from './MyPosts.module.css';

/* let s = {
    'content': 'Content_content__GgJDS',
    'img-bich': 'Content_img-bich__ubn4y'
}; */

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    ) 
}

export default MyPosts;