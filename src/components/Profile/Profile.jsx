import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePorftfolio from './ProfilePorftfolio/ProfilePorftfolio';

const Profile = () => {
  return (<div className={s.profile}>

    <ProfileBackground />
    <ProfileInfo />
    <MyPosts />
    <ProfilePorftfolio />
  </div>);
}

export default Profile;