import loader from "../../../assets/images/preloader.gif";
import React from "react";
import s from './Preloader.module.css';

let Preloader = () => {
    return <div className={s.preloader}>
        <img src={loader} alt="" className={s.preloader}/>
    </div>
};

export default Preloader;