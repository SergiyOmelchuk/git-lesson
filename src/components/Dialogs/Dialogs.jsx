import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItem';
import MessageItem from './Messages/MessageItem';



const Dialogs = (props) => {

    return (
        <div className={s.dialogsPage}>
            <DialogItem store={props.store} dispatch={props.dispatch}/>
            <MessageItem store={props.store} dispatch={props.dispatch}/>
        </div>);
}

export default Dialogs;