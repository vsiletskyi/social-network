import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { required } from '../../../utils/validators/validators';


function MyPosts(props) {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

    let newPostElem = React.createRef();

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <AddPostMessageRedux onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div >
    )
}

const AddPostMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newPostText' validate={[required, maxLength15, minLength2]} />
            <div><button>Add post</button></div>
        </form>
    )
}

const AddPostMessageRedux = reduxForm({ form: 'postAddMessageForm' })(AddPostMessageForm)

export default MyPosts;
