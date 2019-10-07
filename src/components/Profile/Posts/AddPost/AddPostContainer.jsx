import React from 'react';
import {addPostActiveCreation, updateNewPostActiveCreation} from "../../../redux/Profile-reducer";
import AddPost from "./AddPost";
import {connect} from "react-redux";



// const AddPostContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let addPost = () => {
//                         store.dispatch(addPostActiveCreation());
//                     };
//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostActiveCreation(text));
//                     };
//                     return <AddPost addPost={addPost} onPostChange={onPostChange}
//                                     newPostText={store.getState().profilePage.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActiveCreation());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostActiveCreation(text));
        }
    }
};

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;