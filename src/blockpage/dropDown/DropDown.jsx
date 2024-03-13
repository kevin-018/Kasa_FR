import React, { useState } from "react";
import arrowBack from "../../Assets/Images/arrow_back.png";

const DropDown = ({ title, content, isList = false, open= false }) => {

    const [isOpen, isOpenT] = useState(open);

    const toogleO = () => {
        isOpenT(!isOpen)
    };

    return (
        <article className="dropDown">
            <div className="dropDown_header" onClick={toogleO}>
              <h3 className="dropDown_title">{title}</h3>  
              <img src={arrowBack} alt={isOpen ? "fermé" : "ouvert"} className={isOpen ? "rotated" : ""} />  
            </div>
            {isList ===true
            ? isOpen && <ul className="dropDown_content">{content}</ul>
            : isOpen && <p className="dropDown_content">{content}</p>}
        </article>
    );    
};

export default DropDown;