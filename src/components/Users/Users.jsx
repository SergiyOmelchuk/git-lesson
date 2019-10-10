import React from 'react';
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/avatarImg.png"


class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=1&count=100").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div className={s.users}>
                <div className={s.usersBlock}>
                    {this.props.users.map((u) =>
                        <div key={u.id} className={s.user}>
                            <img className={s.avatarImage} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            <div className={s.buttonDiv}>  {u.followed ?
                                <button onClick={() => this.props.unfollowed(u.id)}
                                        className={s.buttonUnfollow}>Unfollow</button> :
                                <button onClick={() => this.props.followed(u.id)}
                                        className={s.buttonFollow}>Follow</button>}
                            </div>
                            <div> {u.name}</div>
                            <div>{u.status}</div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>

                        </div>
                    )
                    }
                </div>
            </div>
        )
    }
}

export default Users;