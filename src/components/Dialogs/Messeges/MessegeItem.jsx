import React from 'react';
import s from './../Dialogs.module.css';



const MessegeItem = (props) => {

  return (<div className={s.messeges}>
    <div className={s.messegeItem}>Hello</div>
    <div className={s.messegeItem}>How are you?</div>
    <div className={s.messegeItem}>Yo</div>
  </div>);
}

export default MessegeItem;