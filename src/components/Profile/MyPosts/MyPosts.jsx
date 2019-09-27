import React from 'react';
import s from "./../Profile.module.css";

const MyPosts = () => {
    return (<div className={s.profilePosts}>
        <div>
            <textarea name="" id="" placeholder="Напишите текст..."></textarea>
            <button name="Submit">Add Post</button>
        </div>

        <div className={s.PostsPost}>
            <div>
                <div><img className={s.profilePostsImg} src="https://goo-gl.su/lmRdyW" alt=""/></div>
                <div>Alina</div>
            </div>
            <div>
                Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt
                exercitation aliqua esse deserunt ipsum esse in.
            </div>
          <div>
            <img className={s.likeIcon} src="https://goo-gl.su/cVSmGc"/> 0
          </div>

        </div>
        <div className={s.PostsPost}>
            <div>
                <div><img  className={s.profilePostsImg} src="https://goo-gl.su/lmRdyW" alt=""/></div>
                <div>Alina</div>
            </div>
            <div>
                Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt
                exercitation aliqua esse deserunt ipsum esse in.
            </div>
            <div>
                <img className={s.likeIcon} src="https://goo-gl.su/cVSmGc"/> 10
            </div>

        </div>

    </div>);
}

export default MyPosts;