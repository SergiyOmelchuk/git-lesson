import React from 'react';
import s from "./../Profile.module.css";
import AddPost from "./AddPost/AddPost";
import MyPosts from "./MyPosts/MyPosts";

const Posts = (props) => {

    return (<div className={s.profilePosts}>
        <AddPost addPost={props.addPost}
                          updateNewPost={props.updateNewPost}
                          newPostText={props.newPostText}/>
        <MyPosts posts={props.posts}/>
    </div>);
};

export default Posts;