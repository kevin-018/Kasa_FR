import React from "react";
import DropDown from "../dropDown/DropDown";

const DropDownPropos = ({ data }) => {
    
    return (
      <section>
        {data.map((item, index) => (
          <DropDown key={index} title={item.title} content={item.paragraph} />
        ))}
      </section>
    );
  };
  export default DropDownPropos;