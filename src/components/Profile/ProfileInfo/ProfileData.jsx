import React, {Component} from 'react';
import s from "./../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatarImg.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import facebookActiveIcon from "../../../assets/images/facebook_icon_active.png"
import facebookDeActiveIcon from "../../../assets/images/facebook_icon_deactive.png"
import youtubeActiveIcon from "../../../assets/images/youtube_icon_active.png"
import youtubeDeActiveIcon from "../../../assets/images/youtube_icon_deactive.png"
import AboutMeChange from "./AbouteMeChange";
import * as PropTypes from "prop-types";


class ProfileData extends Component {

    render() {
        let {fullName, aboutMe, lookingForAJob, lookingForAJobDescription, ...profile} = this.props.profile;

        return (
            <div>
                <div>
                    <button onClick={this.props.activateEditMode}>Change</button>
                </div>
                <div className={s.profileName}>
                    <b>Name: </b> {fullName}
                </div>
                <div><b>Про меня: </b> {aboutMe}</div>
                <div><b>В поиске работы: </b> {lookingForAJob ? "Да" : "Нет"}</div>
                {lookingForAJob && <div><b>Описание: </b> {lookingForAJobDescription}</div>
                }
            </div>);
    }
}


export default ProfileData;