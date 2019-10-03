import React from 'react';
import s from "./../../Profile.module.css";
import {addPostActiveCreation, updateNewPostActiveCreation} from "../../../redux/Profile-reducer";


const AddPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActiveCreation());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( updateNewPostActiveCreation(text) );
    };

    return (<div className={s.addPost}>
        <div>
            <textarea className={s.addPostTextarea} onChange={onPostChange} name="" ref={newPostElement}
                      placeholder="Напишите текст..." value={props.store._state.profilePage.newPostText}/>
        </div>
        <div>
            <button onClick={addPost} name="Submit">Add Post</button>
        </div>
    </div>);
}

export default AddPost;