import React from "react";
import BannerLogo from "../blockpage/Banner/BannerLogo";
import DropDown from "../blockpage/dropDown/DropDown";
import { dropDownData } from "../Assets/Data/dropDownData";

const DropDownPropos = ({ data }) => {
  return (
    <section>
      {data.map((item, index) => (
        <DropDown key={index} title={item.title} content={item.paragraph} />
      ))}
    </section>
  );
};

const Apropos = () => {
  return (
    <main>
      <BannerLogo />
      <DropDownPropos data={dropDownData} />
    </main>
  );
};

export default Apropos;
