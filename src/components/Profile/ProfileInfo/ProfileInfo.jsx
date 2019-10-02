import React from 'react';
import s from "./../Profile.module.css";


const ProfileInfo = () => {
  return (<div className={s.profileInfo}>
      <div className={s.profileLogo}>< img className={s.profileLogoImg} src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Frs_medium_image%2Fpublic%2Fwoman-no-makeup.jpg%3Fitok%3Drqo_zfOM&q=85" alt="logo" /></div>
      <div className={s.profileName}>Name: Alina</div>
    </div>);
}

export default ProfileInfo;