import React from 'react';
import s from "./../Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import AddPost from "./AddPost/AddPost";

const Posts = (props) => {

    return (<div className={s.profilePosts}>

        {/*<div>Я слежу за тобой: <br/>*/}

        {/*    {props.store.state.profilePage.newPostText}*/}

        {/*</div><br/>*/}
        <AddPost store={props.store} dispatch={props.dispatch}/>
        <MyPosts store={props.store}/>
    </div>);
};

export default Posts;