import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


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

const maxLength10 = maxLengthCreator(10)

const AddPostMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='newPostText' validate={[required, maxLength10]} placeholder='Post message' />
            <div><button>Add post</button></div>
        </form>
    )
}

const AddPostMessageRedux = reduxForm({ form: 'postAddMessageForm' })(AddPostMessageForm)

export default MyPosts;
