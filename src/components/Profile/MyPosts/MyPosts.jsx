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
        <div><img src="https://goo-gl.su/lmRdyW" alt="" /></div>
        <div>Alina</div>
      </div>
      <div>
        Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt exercitation aliqua esse deserunt ipsum esse in.
  </div>

    </div>
    <div className={s.PostsPost}>
      <div>
        <div><img src="https://goo-gl.su/lmRdyW" alt="" /></div>
        <div>Alina</div>
      </div>
      <div>
        Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt exercitation aliqua esse deserunt ipsum esse in.
  </div>

    </div>

  </div>);
}

export default MyPosts;