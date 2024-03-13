import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import DropDown from "../blockpage/dropDown/DropDown";
import logementsData from "../Assets/Data/logements.json";
import Slides from "../blockpage/slides/Slides.jsx";


const List  = () => {
    const nav = useNavigate();
    const { id } = useParams();

    const [logement, setLogement] = useState(null);

    useEffect(() => {
        window.scrollTo(0.0);

        const findLogement = logementsData.find((item) => item.id === id);
        if (!findLogement) {
            Navigate('/Erreur');
            return;
        }

        setLogement(findLogement);
    }, [id, navigate]);

    if(!logement) {
        return <div>Chargement...</div>;
    }

    // Extraction données

    const { title, location: logLocation, tags, rating, description, equipements, host, pictures } = logement;
    const equipementList = (equipements || []).map((equipment, index) => <li key={index}>{equipment}</li>);

    return (
        <main>
            <Slides listSlides={pictures} />
            <
        </main>
    )
}