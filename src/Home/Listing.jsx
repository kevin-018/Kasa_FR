import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DropDown from "../blockpage/dropDown/DropDown";
import logementsData from "../Assets/Data/logements.json";
import Slides from "../blockpage/slides/Slides.jsx";
import AccommodationInfo from "../blockpage/infolist/infoList.jsx";


const List  = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [logement, setLogement] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const findLogement = logementsData.find((item) => item.id === id);
        if (!findLogement) {
            navigate('/Erreur');
            return;
        }

        setLogement(findLogement);
    }, [id, navigate]);

    if(!logement) {
        return <div>Chargement...</div>;
    }

    // Extraction données

    const { title, location: logLocation, tags, rating, description, equipments, host, pictures } = logement;
    const equipementList = (equipments || []).map((equipment, index) => <li key={index}>{equipment}</li>);

    return (
        <main>
            <Slides listSlides={pictures} />
            <AccommodationInfo
            title={title}
            tags={tags || []}
            location={logLocation}
            rating={rating}
            name={host?.name}
            picture={host?.picture}/>

            <section className="adropDown">
                <DropDown
                key="0"
                title="description"
                content={description}
                isList={false}
                open={true}/>
            
                <DropDown
                key="1"
                title="équipements"
                content={equipementList}
                isList={true}
                open={true}/>
            </section>
        </main>
    );
};

export default List;