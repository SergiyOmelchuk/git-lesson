import React, {Component} from 'react';
import s from "./../Profile.module.css";
import userPhoto from "../../../assets/images/avatarImg.png";
import Preloader from "../../common/Preloader/Preloader";


class ProfileMainPhoto extends React.Component {

    state = {
        editMode: false
    }

     mainPhotoSelected = (e) => {
        if (e.currentTarget.files.length) {
           this.state.editMode= true;
            this.props.setPhoto(e.currentTarget.files[0]);
            this.state.editMode= false;
        }
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.profile.photos.large != prevProps.profile.photos.large) {
    //         this.state.editMode= false;
    //         alert("componentDidUpdate")
    //     }
    // }

    render() {

        return (
            <div>
                <div className={s.profileLogo}>
                    {!this.state.editMode
                        ? <img className={s.profileLogoImg}
                               src={this.props.profile.photos.large != null ? this.props.profile.photos.large : userPhoto}
                               alt="logo"/>
                        : <Preloader/>
                    }
                </div>
                <div>
                    <input type={"file"} onChange={this.mainPhotoSelected}/>
                </div>

            </div>);
    }
}


export default ProfileMainPhoto;