import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

/* let s = {
    'content': 'Content_content__GgJDS',
    'img-bich': 'Content_img-bich__ubn4y'
}; */

const Content = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postData ={props.postData} />
        </div>
    ) 
    
}

export default Content;