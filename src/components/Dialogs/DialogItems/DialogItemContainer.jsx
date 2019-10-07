// import React from 'react';
import DialogItem from "./DialogItem";
import {connect} from "react-redux";


//const DialogItemContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let dialogItem = store.getState().dialogsPage.names.map(el =>
//                     <div className={s.dialogs}><NavLink to={'/dialogs/' + el.id}> {el.name}</NavLink></div>);
//
//                 return <div>
//                     <DialogItem names={store.getState().dialogsPage.names}/>
//                 </div>
//             }}
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        names: state.dialogsPage
    };
};
let mapDispatchToProps = (dispatch) => {

};

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);

export default DialogItemContainer;