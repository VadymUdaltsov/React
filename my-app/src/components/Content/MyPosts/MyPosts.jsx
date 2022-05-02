import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css'

const MyPosts = () => {

    let postData = [
        { message: 'Hi, how are you?', likesCount: 5 },
        { message: "It's my first post.", likesCount: 15 }
    ];

    let Posts = postData
    .map( m => <Post message={m.message} value={m.likesCount} /> );

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
                {Posts}
            </div>
        </div>
    ) 
}

export default MyPosts;