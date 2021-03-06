import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {

    let dialogItem = props.names.names.map(el =>

        <div className={s.dialogs} key={el.id}><NavLink to={'/dialogs/' + el.id}> {el.name}</NavLink></div>);

    return (<div className={s.dialogsItem}>
        {dialogItem}
    </div>);
}

export default DialogItem;