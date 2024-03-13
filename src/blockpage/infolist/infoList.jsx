import React from "react";
import starsVoid from "../../Assets/Images/starsVoid.png";
import starsFill from "../../Assets/Images/starsFill.png";

const AccommodationInfo = ({
    title,
    tags,
    location,
    picture,
    rating,
    name,
}) => {

    // 1 tranformée en nombres 2 Le tableau avec les etoiles qui correspond a la note 3 tableau restant 
    const numStars = parseInt(num);

    const starsFill = Array.from({ length: numStars }, (i) => i);

    const starsVoid = Array.from(
        { length: 5 - numStars },
        (i) => i + numStars
    );


    
}