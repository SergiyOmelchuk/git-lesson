import React from 'react';
import s from "./../Profile.module.css";


const ProfilePorftfolio = () => {
    return (
        <div className={s.profilePortfolio}>
            <div className={s.portfolioTittle}>
                Portfolio
            </div>
            <div className={s.portfolioItems}>
                <div><a href="./"><img src="https://www.cmonsite.fr/images/home_picto_cmonsite.png" alt=""/></a></div>
                <div><a href="./"><img src="http://www.creation-site-immobilier.net/images/site-pack.jpg" alt=""/></a>
                </div>
                <a href="./"><img src="https://html5up.net/assets/icons/card.jpg" alt=""/></a>
                <a href="./"><img
                    src="https://websitesetup.org/wp-content/uploads/2018/04/best-blog-sites-wix-1024x538.jpg" alt=""/></a>
                <a href="./"><img
                    src="https://elements-cover-images-0.imgix.net/408ed4c6-320d-413c-9462-aa48dd9ee730?auto=compress%2Cformat&fit=max&w=1370&s=e27a5887ec639ec22fa532b86b061431"
                    alt="./"/></a>
                <a href="./"><img
                    src="https://elements-cover-images-0.imgix.net/a99237a7-882d-4e0c-98b4-c49daa5fd474?auto=compress%2Cformat&fit=max&w=710&s=2e68f0ba3c93f92d79152ddc48650c3a"
                    alt=""/></a>
                <a href="./"><img
                    src="https://colorlib.com/wp/wp-content/uploads/sites/2/personal-multipurpose-blog-theme.jpg"
                    alt="./"/></a>
                <a href="./"><img
                    src="https://colorlib.com/wp/wp-content/uploads/sites/2/lisbeth-simple-wordpress-blog-theme.jpg"
                    alt=""/></a>
            </div>
        </div>);
}

export default ProfilePorftfolio;