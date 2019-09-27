import React from 'react';
import s from './../Dialogs.module.css';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {

  let dialogItem = props.state.names.map(el =>
    <div className={s.dialogs}><NavLink to={'/dialogs/' + el.id}> {el.name}</NavLink> </div>);

  return (<div className={s.dialogsItem}>
    {dialogItem}
  </div>);
}

export default DialogItem;