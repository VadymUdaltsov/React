import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let postElements = props.postData
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
                {postElements}
            </div>
        </div>
    ) 
}

export default MyPosts;