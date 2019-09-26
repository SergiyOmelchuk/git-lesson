import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItem';
import MessegeItem from './Messeges/MessegeItem';


const Dialogs = (props) => {

  return (
    <div className={s.dialogsPage}>
      <DialogItem state={props.state}/>
      <MessegeItem />
    </div>);
}

export default Dialogs;