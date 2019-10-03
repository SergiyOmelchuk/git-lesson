import React from 'react';
import s from './../../Dialogs.module.css';
import {addMessageActiveCreation, updateNewMessageActiveCreation,} from "../../../redux/Dialogs-reducer";


const AddMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActiveCreation());
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActiveCreation(text));
    };

    return (<div className={s.addMessage}>
        <div>
            <textarea name="" ref={newMessageElement} onChange={onMessageChange} value={props.store.newMessageText}
                      placeholder="Напишите сообщение..."/>
        </div>
        <div>
            <button onClick={addMessage} name="Submit">Add Message</button>
        </div>
    </div>);
}

export default AddMessage;