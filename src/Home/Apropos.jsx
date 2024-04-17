import React from "react";
import BannerLogo from "../blockpage/Banner/BannerLogo";
import { dropDownData } from "../Assets/Data/dropDownData";
import DropDownPropos from "../blockpage/DropDownPropos.jsx/DropDownPropos";

const Apropos = () => {
  return (
    <main>
      <BannerLogo />
      <DropDownPropos data={dropDownData} />
    </main>
  );
};

export default Apropos;
