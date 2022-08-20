import React from "react";
import "./menu.css";
import { Sidelinks } from "../sidemenu/sideMenuIcons"
import { Link } from "react-router-dom";


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
        <div className="profile">
          
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>DAVID MATOVU</Link>
        </div>
        
        {generateLinkContiner()}
      </div>
    </>
  );
};

export default Menu;