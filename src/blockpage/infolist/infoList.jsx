import React from "react";
// étoile vide
import starGrey from "../../Assets/Images/starsVoid.svg";
// étoile non vide
import starColor from "../../Assets/Images/starsFill.svg";


function AccommodationInfo({ title, tags, location, picture, rating, name }) {
  const ratingsTab = [1, 2, 3, 4, 5];
  return (
    <section className="iSection">
      <div className="info">
        <h3 className="title_info">{title}</h3>
        <p className="location_info">{location}</p>
        <div className="tags_info">
          {tags.map((tag) => (
            <span key={tag} className="tag_info">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="hostContainer">
        <div className="host">
          <h3>{name}</h3>
          <img src={picture} alt={name} />
        </div>
        
          {ratingsTab.map((elem, indexValue) =>
          elem <= parseInt(rating) ? (
            <img key={indexValue} src={starColor} alt="étoile coloré" />
          ) : (
            <img key={indexValue} src={starGrey} alt="étoile grise" />
          )
            )}
        
      </div>
    </section>
  );
}
export default AccommodationInfo;
