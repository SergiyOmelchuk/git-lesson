import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        names: state.dialogsPage,
        messagesTest: state.messagesTest,
        newMessageText: state.newMessageText,
        auth: state.auth.isAuth
    };
};
let mapDispatchToProps = (dispatch) => {
    return;
};

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
//
// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);