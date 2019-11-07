import React from 'react';
import s from "./../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatarImg.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const ProfileInfo = ({profile, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.profileLogo}>
                < img className={s.profileLogoImg}
                      src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="logo"/>
            </div>
            <div className={s.profileName}><b>Name:</b> {profile.fullName}</div>
            <ProfileStatusWithHooks {...props}/>
            <div><b>Статус:</b> {profile.lookingForAJobDescription}</div>
        </div>);
}

export default ProfileInfo;