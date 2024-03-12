import React from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../Images/headerLogo.png";

function Header() {
  return (
    <Header className="header">
      <img src={headerLogo} alt="Logo de Kasa" className="header_logo" />
      <div className="Navigation">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/Apropos">
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </Header>
  );
}

export default Header;
