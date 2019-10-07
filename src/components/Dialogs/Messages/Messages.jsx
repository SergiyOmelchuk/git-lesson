import React from 'react';
import s from './../Dialogs.module.css';
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import MessageItemContainer from "./MessageItem/MessageItemContainer";


const Messages = (props) => {

    return (<div className={s.messages}>
        <MessageItemContainer />
        <AddMessageContainer />
    </div>);
}

export default Messages;