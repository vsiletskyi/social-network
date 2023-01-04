import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {



    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

    let newPostElem = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText} ref={newPostElem} /></div>
                <div><button onClick={onAddPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div >
    )
}

export default MyPosts;
