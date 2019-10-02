import React from 'react';
import s from "./../../Profile.module.css";

const MyPosts = (props) => {

    let allPosts = props.store._state.profilePage.posts.map(el =>
        (
            <div className={s.PostsPost}>
                <div><img className={s.profilePostsImg} src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Frs_medium_image%2Fpublic%2Fwoman-no-makeup.jpg%3Fitok%3Drqo_zfOM&q=85" alt=""/></div>
                <div>Alina</div>
                <div>"{el.message}"</div>
                <div><img className={s.likeIcon} src="https://cdn3.iconfinder.com/data/icons/cosmo-color-basic-1/40/favorite-512.png" alt=""/>{el.likesCount}
                </div>
            </div>
        ));

    return (
        <div>
            {allPosts}
        </div>);
}

export default MyPosts;