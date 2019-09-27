import React from 'react';
import s from './../Dialogs.module.css';


const MessageItem = (props) => {
    function author(name) {
        if (name == 1) {
            return s.messageItemLeft;
        } else {
            return s.messageItemRight;
        }
    }

    let messageItem = props.state.messagesTest.map(el =>
        <div className={author(el.author)}>{el.text} </div>);

    return (<div className={s.messages}>
        {messageItem}
    </div>);
}

export default MessageItem;