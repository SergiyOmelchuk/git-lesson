import React from 'react';
import {addMessageActiveCreation} from "../../../redux/Dialogs-reducer";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";


// const AddMessageContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let addMessage = () => {
//                     store.dispatch(addMessageActiveCreation());
//                 };
//                 let onMessageChange = (text) => {
//                     store.dispatch(updateNewMessageActiveCreation(text));
//                 };
//
//                 return <div>
//                     <AddMessage addMessage={addMessage} onMessageChange={onMessageChange}
//                                 newMessageText={store.getState().dialogsPage.newMessageText}/>
//                 </div>
//             }
//             }
//         </StoreContext.Consumer>
//     );
// }
let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActiveCreation(newMessageText));
        }
        // onMessageChange: (text) => {
        //     dispatch(updateNewMessageActiveCreation(text));
        // }
    }
};

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;