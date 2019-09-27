import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItem';
import MessageItem from './Messages/MessageItem';


const Dialogs = (props) => {

  return (
    <div className={s.dialogsPage}>
      <DialogItem state={props.state}/>
      <MessageItem state={props.state}/>
    </div>);
}

export default Dialogs;