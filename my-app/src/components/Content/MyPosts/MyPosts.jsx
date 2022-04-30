import React from 'react';
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hi, how are you?' value='5' />
                <Post message="It's my first post." value='15' />
            </div>
        </div>
    ) 
}

export default MyPosts;