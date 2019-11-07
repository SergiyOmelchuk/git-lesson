import {profileAPI, usersAPI} from "../../api/api";

let initialState = {
    posts: [
        {
            id: 1,
            message: "Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt\n" +
                "                exercitation aliqua esse deserunt ipsum esse in.",
            likesCount: 0
        },
        {
            id: 2,
            message: "Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt\n" +
                "                exercitation aliqua esse deserunt ipsum esse in.",
            likesCount: 15
        },
        {
            id: 3,
            message: "Eu pariatur voluptate reprehenderit ad tempor velit id exercitation. Nisi occaecat incididunt\n" +
                "                exercitation aliqua esse deserunt ipsum esse in.",
            likesCount: 5
        },
        {id: 4, message: "Круть", likesCount: 7}
    ],
    profile: null,
    status: ""
};

const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const UPDATE_STATUS = "UPDATE-STATUS";
const DELETE_POST = "DELETE-POST";

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                likesCount: 0,
                message: action.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case "UPDATE-NEW-POST":
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case UPDATE_STATUS:
            return {
                ...state, status: action.status
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
            case DELETE_POST:
            return {
                ...state, posts: state.posts.filter( p => p.id != action.postId)
            }
        default:
            return state;
    }
};

export let addPost = (newPostText) => ({type: "ADD-POST", newPostText});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let updateNewPost = (text) => ({type: "UPDATE-NEW-POST", newText: text});
export let setStatus = (status) => ({type: SET_STATUS, status});
export let deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            dispatch(setStatus(status));
        });
    }
}
export default profileReducer;