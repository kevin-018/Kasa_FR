import React from "react";
import { NavLink } from "react-router-dom";
import errorLogo from "../Assets/Images/404.png";


function Error() {
    return (
        <main className="error">
            <img className="image_error" src={errorLogo} alt="erreur" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </main>
    )
}


export default Error;