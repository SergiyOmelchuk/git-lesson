import React from 'react';
import s from './Dialogs.module.css';
import DialogItemContainer from "./DialogItems/DialogItemContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogsPage}>
            <DialogItemContainer/>
            <MessagesContainer/>
        </div>);
}

export default Dialogs;