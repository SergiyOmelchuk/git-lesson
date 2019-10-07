import React from 'react';
import MessageItem from "./MessageItem";
import {connect} from "react-redux";



// const MessageItemContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             { (store) => (
//                 <MessageItem messagesTest={store.getState().dialogsPage.messagesTest}/>
//             )
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        messagesTest: state.dialogsPage.messagesTest
    };
};
let mapDispatchToProps = (dispatch) => {
return;
};

const MessageItemContainer = connect(mapStateToProps, mapDispatchToProps)(MessageItem);

export default MessageItemContainer;