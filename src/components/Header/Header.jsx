import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (<div className={s.header}>
    <NavLink to='/'><img src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png" alt=""/></NavLink>
  </div>);
}

export default Header;