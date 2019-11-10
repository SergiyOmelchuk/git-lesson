import React from 'react';
import s from "./../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileData from "./ProfileData";
import ProfileDataEditForm from "./ProfileDataEditForm";
import ProfileMainPhoto from "./ProfileMainPhoto";


class ProfileInfo extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    onSubmit = (formData) => {
        this.props.updateProfileData(formData);
        this.state.editMode = false;
    }

    render() {
        let {profile, setPhoto, updateMode, ...props} = this.props;
        if (!profile) {
            return <Preloader/>
        }
        return (
            <div className={s.profileInfo}>
                <ProfileMainPhoto updateMode={updateMode} profile={profile} setPhoto={setPhoto}/>
                {!this.state.editMode
                    ? <ProfileData profile={profile} activateEditMode={this.activateEditMode}/>
                    : <ProfileDataEditForm initialValues={profile} onSubmit={this.onSubmit}/>}
                <div>
                    <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
                </div>
                <ProfileStatusWithHooks {...props}/>
            </div>);
    }
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;