import textLoader from "../../../assets/images/preloader-text.gif";
import React from "react";
import s from './Preloader.module.css';

let TextPreloader = () => {
    return <div className={s.preloader}>
        <img src={textLoader} alt="" className={s.textPreloader}/>
    </div>
};

export default TextPreloader;