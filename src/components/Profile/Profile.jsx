import React from 'react';
import s from "./Profile.module.css";
import Posts from './Posts/Posts';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePorftfolio from './ProfilePorftfolio/ProfilePorftfolio';

const Profile = (props) => {
  return (<div className={s.profile}>

    <ProfileBackground />
    <ProfileInfo />
    <Posts store={props.store} dispatch={props.dispatch}/>
    <ProfilePorftfolio />
  </div>);
}

export default Profile;