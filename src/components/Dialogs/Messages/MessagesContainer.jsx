import React from 'react';
import s from './../Dialogs.module.css';
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import MessageItemContainer from "./MessageItem/MessageItemContainer";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    return (
        <div>
            <Messages props={props}/>
        </div>);
}

export default MessagesContainer;