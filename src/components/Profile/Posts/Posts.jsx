import React from 'react';
import s from "./../Profile.module.css";
import AddPostContainer from "./AddPost/AddPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Posts = (props) => {

    return (<div className={s.profilePosts}>


        <AddPostContainer store={props.store} />
        <MyPostsContainer store={props.store}/>
    </div>);
};

export default Posts;