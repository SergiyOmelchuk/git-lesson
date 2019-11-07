import React, {Component} from 'react';
import s from "./../../Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthControlerConstructor, required} from "../../../../utils/validators";
import {createField, Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength20 = maxLengthControlerConstructor(3);

class AddPostForm extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        return nextProps == this.props ;
    }

    render() {
        console.log("AddPost");
        return (
            <form onSubmit={this.props.handleSubmit}>
                {createField("Напишите текст...", "newPostText", [required, maxLength20], Textarea,
                    "", {className: s.addPostTextarea})}
                {/*<div>*/}
                {/*    */}
                {/*    <Field className={s.addPostTextarea} component={Textarea} name="newPostText"*/}
                {/*           validate={[required, maxLength20]}*/}
                {/*           placeholder="Напишите текст..."/>*/}
                {/*</div>*/}
                <div>
                    <button>Add Post</button>
                </div>
            </form>
        )
    }
}


const AddPostReduxForm = reduxForm({form: "AddPostForm"})(AddPostForm);

const AddPost = (props) => {

    let onAddPost = (values) => {
        debugger
        props.addPost(values.newPostText);
    };

    return (<div className={s.addPost}>
        <AddPostReduxForm onSubmit={onAddPost}/>
    </div>);
}

export default AddPost;