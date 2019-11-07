import {usersAPI} from "../../api/api";
import {updateObjInArray} from "../../utils/object-helpers";

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
};

const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS";

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case "FOLLOW":
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map((u) => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true};
                //     }
                //     return u;
                // }),
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, "id", {followed: false})
                // users: state.users.map((u) => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false};
                //     }
                //     return u;
                // }),
            }

        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.usersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter((id) => id != action.userId)
            }
        }
        default: {
            return state;
        }
    }
};

export let followed = (userId) => ({type: "FOLLOW", userId});
export let unfollowed = (userId) => ({type: "UNFOLLOW", userId});
export let setUsers = (users) => ({type: "SET-USERS", users});
export let setCurrentPage = (currentPage) => ({type: "SET-CURRENT-PAGE", currentPage});
export let setTotalUsersCount = (usersCount) => ({type: "SET-TOTAL-USERS-COUNT", usersCount});
export let setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let toggleIsFollowingProgress = (isFollowing, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFollowing,
    userId
});

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(setIsFetching(false));
        });
    }
};
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(toggleIsFollowingProgress(false, userId));
    }
};
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followed.bind(usersAPI), followed);
    }
};
export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollowed.bind(usersAPI), unfollowed);
    }
}

export default usersReducer;