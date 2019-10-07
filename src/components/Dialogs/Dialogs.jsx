import React from 'react';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DialogItemContainer from "./DialogItems/DialogItemContainer";

const Dialogs = (props) => {

    return (
        <div className={s.dialogsPage}>
            <DialogItemContainer />
            <Messages />
        </div>);
}

export default Dialogs;