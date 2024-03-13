import React from "react";
//import starVoid from "../../Assets/Images/starsVoid.svg";
//import starFill from "../../Assets/Images/starsFill.svg";

const AccommodationInfo = ({
    title,
    tags,
    location,
    picture,
    rating,
    name,
}) => {

    // 1 tranformée en nombres 2 Le tableau avec les etoiles qui correspond a la note 3 tableau restant 
    const NumRating = parseInt(rating);

    const fillStars = Array.from({ length: NumRating }, (i) => i);

    const voidStars = Array.from(
        { length: 5 - NumRating },
        (i) => i + NumRating
    );
return (
    <section className="iSection">
        <div className="info">
            <h3 className="title_info">{title}</h3>
            <p className="location_info">{location}</p>
            <div className="tags_info">
                {tags.map((tag) =>(
                    <span key={tag} className="tag_info">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="hostContainer">
            <div className="host">
                <h3>{name}</h3>
                <img src={picture} alt={name}/>
            </div>
        </div>
    </section>
  );
};

export default AccommodationInfo;