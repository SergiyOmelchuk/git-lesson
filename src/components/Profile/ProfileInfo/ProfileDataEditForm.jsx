import React from 'react';
import s from "./../Profile.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataEditForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <button>Save</button>
                </div>
                <div>
                    <b>Name: : </b> {createField("Name", "fullName", [], Input, )}
                </div>
                <div>
                    <b>Looking for a job: </b> {createField("lookingForAJob: ", "lookingForAJob", [], Input, "", {type: "checkbox"})}
                </div>
                <div>
                    <b>lookingForAJobDescription: </b> {createField("lookingForAJobDescription", "lookingForAJobDescription", [], Textarea, )}
                </div>
                <div>
                    <b>About me: </b> {createField("About me: ", "aboutMe", [], Input, )}
                </div>

            </div>

        </form>);
}

const ProfileDataEditReduxForm = reduxForm({form: "profileData"})(ProfileDataEditForm);

export default ProfileDataEditReduxForm;