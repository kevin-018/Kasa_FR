import React from "react";
import footerLogo from "../../Assets/Images/footerLogo.png";
const Footer = () => { 
    return (
        <footer>
            <img src={footerLogo} alt="Logo Kasa"/>
            <p>@ 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;