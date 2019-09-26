import React from 'react';
import s from "./../Profile.module.css";


const ProfileInfo = () => {
  return (<div className={s.profileInfo}>
      <div className={s.profileLogo}>< img className={s.profileLogoImg} src="https://goo-gl.su/lmRdyW" alt="logo" /></div>
      <div className={s.profileName}>Name: Alina</div>
    </div>);
}

export default ProfileInfo;