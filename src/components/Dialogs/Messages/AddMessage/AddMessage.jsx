import React from 'react';
import s from './../../Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthControlerConstructor, required} from "../../../../utils/validators";

const maxLength50 = maxLengthControlerConstructor(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageText"} validate={[required, maxLength50]}
                       placeholder={"Напишите сообщение..."}/>
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({form: "AddMessageForm"})(AddMessageForm);

const AddMessage = (props) => {

    // let newMessageElement = React.createRef();

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    };
    // let onMessageChange = () => {
    //     let text = newMessageElement.current.value;
    //     props.onMessageChange(text);
    // };

    return (
        <div className={s.addMessage}>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
}

export default AddMessage;