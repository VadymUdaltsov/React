import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let postElements = props.postData
    .map( m => <Post message={m.message} value={m.likesCount} /> );

    let newPostElement = React.createRef(); /* так мы обращаемся к textarea */

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.post_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea> {/* В React мы не используем document, querySelector, мы обращаемся к обьектам через ref и React.createRef() */}
                </div>
                <div>
                    <button onClick={addPost} className={s.btn_post}>Add post</button> {/* callback функция- это функция которую вызываем не мы а кто-то другой, например кнопка. Она вызывает функцию при клике и это и будет callback */}
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    ) 
}

export default MyPosts;