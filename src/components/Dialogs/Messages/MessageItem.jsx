import React from 'react';
import s from './../Dialogs.module.css';
import AddMessage from "./AddMessage/AddMessage";


const MessageItem = (props) => {

    function author(name) {
        if (name === 1) {
            return s.messageItemLeft;
        } else {
            return s.messageItemRight;
        }
    }

    let messageItem = props.store.messagesTest.map(el =>
        <div className={author(el.author)}>{el.text} </div>);

    return (<div className={s.messages}>
        {messageItem}
        <AddMessage store={props.store} dispatch={props.dispatch}/>
    </div>);
}

export default MessageItem;