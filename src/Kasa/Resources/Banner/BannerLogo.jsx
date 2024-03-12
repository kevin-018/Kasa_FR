import React from "react";
import imgAccueil from"../Images/Banner.png";
import imgAPropos from"../Images/apropos.png";
import { useLocation } from 'react-router-dom';

const BannerLogo = () => {

    const location = useLocation();

    const pageAccueil = location.pathname === "/";
    const title = pageAccueil;

    return (
        <div className="bannerAccueil">
            <div className=" bannerAccueil_overlay">
                {/*Images*/}
                <img src={pageAccueil ? imgAccueil : imgAPropos} alt="imageBanner" />
            </div>
        {title && (
            <h1 className="titleBanner">
                Chez vous, partout et ailleurs
            </h1>
        )}
        </div>
    );
};
export default BannerLogo;