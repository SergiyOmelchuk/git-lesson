import React from 'react';
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, users, ...props}) => {

    return (
        <div className={s.users}>
            <Paginator currentPage={currentPage} pageSize={pageSize}
                       totalUsersCount={totalUsersCount} onPageChanged={onPageChanged}/>
            <div className={s.usersBlock}>
                {
                    users.map((user) => <User key={user.id}
                                              user={user}
                                              isFollowing={props.isFollowing}
                                              toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                                              follow={props.follow}
                                              unFollow={props.unFollow}/>
                    )
                }

            </div>
        </div>
    )

};

export default Users;