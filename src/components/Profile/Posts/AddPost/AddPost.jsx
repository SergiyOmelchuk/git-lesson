import React from 'react';
import s from "./../../Profile.module.css";


const AddPost = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };

    return (<div className={s.addPost}>
        <div>Я слежу за тобой: <br/>
            {props.newPostText}
        </div>
        <br/>
        <div>
            <textarea className={s.addPostTextarea} onChange={onPostChange} name="" ref={newPostElement}
                      placeholder="Напишите текст..." value={props.newPostText}/>
        </div>
        <div>
            <button onClick={onAddPost} name="Submit">Add Post</button>
        </div>
    </div>);
}

export default AddPost;