import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../redux/Users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        followed: (userId) => {
            dispatch(followAC(userId));
        },
        unfollowed: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;