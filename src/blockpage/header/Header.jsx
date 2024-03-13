import React from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../../Assets/Images/headerLogo.png";

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Logo de Kasa" className="header_logo" />
      <div className="Nav">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/apropos">
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Header;
