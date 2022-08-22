import React from "react";
import "./menu.css";
import Footer from "../footer/Footer";
import SocialMdeiaLinks from "../sociallinks/SocialMdeiaLinks";
import Profile from "./Profile";
import GenerateLinkContainer from "./GenerateLinkContainer";


const Menu = () => {
  return (
    <>
      <div className="sidebar">
        <Profile name={"DAVID MATOVU"}/>
        <SocialMdeiaLinks/>
        <GenerateLinkContainer/>
        <Footer/>
      </div>
    </>
  );
};

export default Menu;