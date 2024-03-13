import React, { useState } from "react";
import leftArrow from "../../Assets/Images/arrow_left.png";
import rightArrow from "../../Assets/Images/arrow_right.png";

const Slides = ({ listSlides }) => {

    const [index, setIndex] = useState(0);
    const length = listSlides.length;
    const slideCurrent = listSlides[index];

    return (
        <div className="carousel">
            {
                listSlides.length > 1 && 
                <img src={leftArrow}  alt="location précédente" onClick={() => {
                    index === 0 ? setIndex(listSlides.length - 1 ): setIndex(index - 1);
                }}
                className="leftArrow"
                key={listSlides.id}
                loading="car"/>
            }
             {
                listSlides.length > 1 && 
                <img src={rightArrow}  alt="location suivante" onClick={() => {
                    index === 0 ? setIndex(listSlides.length - 1 ): setIndex(index + 1);
                }}
                className="rightArrow"
                loading="car"/>
            }
                <img src={slideCurrent} alt={slideCurrent} loading="car"/>

            {
                listSlides.length > 1 && <p>{index + 1 + "/" + length}</p>
            }

        </div>
    );

};

export default Slides;