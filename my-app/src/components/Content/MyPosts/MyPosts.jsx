import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.post_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={s.btn_post}>Add post</button>
                </div>
            </div>
            <div>
                <Post message='Hi, how are you?' value='5' />
                <Post message="It's my first post." value='15' />
            </div>
        </div>
    ) 
}

export default MyPosts;