import React from "react";
import "./menu.css";
import { Sidelinks } from "../sidemenu/sideMenuIcons"
import Footer from "../footer/Footer";
import SocialMdeiaLinks from "../sociallinks/SocialMdeiaLinks";
import Profile from "./Profile";



const sideBarLinks = {
  home: [{ name: "Home", icon: "home" }, { name: "About", icon: "about" ,link:"type"},
  { name: "Resume", icon: "resume" },{ name: "Portfolio", icon: "portfolio" },{ name: "Services", icon: "services" }],
}

const generateLinkContiner = () =>{
  const newContainer =[]
  for(const[,value] of Object.entries(sideBarLinks)){
  newContainer.push(
    <div className= "link-container">
    {value.map((link) => {
          return <Sidelinks link={link} />;
        })}
    </div>
  )
}
return newContainer
}


const Menu = () => {
  return (
    <>
      <div className="sidebar">
        <Profile name={"DAVID MATOVU"}/>
        <SocialMdeiaLinks/>
        {generateLinkContiner()}
        <Footer/>
      </div>
    </>
  );
};

export default Menu;