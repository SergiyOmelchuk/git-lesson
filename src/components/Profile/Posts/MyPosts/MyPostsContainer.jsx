import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//             store =>
//             <div>
//                 <MyPosts posts={store.getState().profilePage.posts}/>
//             </div>
//         }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    };
};
let mapDispatchToProps = (dispatch) => {

};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;