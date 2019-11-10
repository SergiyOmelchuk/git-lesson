import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avatarImg.png";
import {NavLink} from "react-router-dom";

let User = ({user, follow, isFollowing, unFollow, ...props}) => {
    return (
        <div className={s.user}>
            <NavLink to={"/profile/" + user.id}>
                <img className={s.avatarImage}
                     src={user.photos.small != null ? user.photos.small : userPhoto}/>
            </NavLink>
            <div className={s.buttonDiv}>
                {user.followed ?
                    <button disabled={isFollowing.some((id) => id === user.id)}
                            onClick={() => {
                                unFollow(user.id);
                                // props.toggleIsFollowingProgress(true, user.id);
                                // followAPI.unFollowed(user.id).then(response => {
                                //     if (response.resultCode === 0) {
                                //         props.unfollowed(user.id);
                                //         props.toggleIsFollowingProgress(false, user.id);
                                //     }
                                // })
                            }
                            }
                            className={s.buttonUnfollow}>Unfollow
                    </button> :
                    <button disabled={isFollowing.some((id) => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                                // props.toggleIsFollowingProgress(true, user.id);
                                // followAPI.followed(user.id).then(response => {
                                //     if (response.resultCode === 0) {
                                //         props.followed(user.id);
                                //         props.toggleIsFollowingProgress(false, user.id);
                                //     }
                                // })
                            }
                            }
                            className={s.buttonFollow}>Follow
                    </button>
                }
            </div>
            <div> {user.name}</div>
            <div> {"user.lookingForAJob" ? "Yes" : " No"}</div>
            <div>{user.status}</div>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>

        </div>)
};

export default User;