import React from 'react';
import s from './../../Dialogs.module.css';


const AddMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    };

    return (<div className={s.addMessage}>
        <div>
            <textarea name="" ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}
                      placeholder="Напишите сообщение..."/>
    </div>
        <div>
            <button onClick={addMessage} name="Submit">Add Message</button>
        </div>
    </div>);
}

export default AddMessage;