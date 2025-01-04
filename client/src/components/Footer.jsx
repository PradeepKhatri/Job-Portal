import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="contaniner px-4 lg:px-20 2xl:px-20 mx-auto flex justify-between items-center py-4 mt-20">
      <img width={160} src={assets.logo} alt="" />
      <div className="flex gap-4">
        <img width={38} src={assets.facebook_icon} alt="" />
        <img width={38} src={assets.twitter_icon} alt="" />
        <img width={38} src={assets.instagram_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
