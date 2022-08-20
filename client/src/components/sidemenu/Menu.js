import React from "react";
import "./menu.css";
import { Sidelinks } from "../sidemenu/sideMenuIcons"
import { Link } from "react-router-dom";
import davi from "../../assets/images/davi.jpg"
import Footer from "../footer/Footer";
import SocialMdeiaLinks from "../sociallinks/SocialMdeiaLinks";



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
          <img src={davi} alt="" style={{
          margin: "15px auto",
          display: "block",
          width: "120px",
          border: "8px solid #2c2f3f",
          borderRadius: "50%", 
          height: "120px"}}/>
        <Link to="/" style={{ textDecoration: "none", color: "white", marginTop: "10px"}}>
          <h1>DAVID MATOVU</h1>
          </Link>
        </div>
        <SocialMdeiaLinks/>
        {generateLinkContiner()}
        <Footer/>
      </div>
    </>
  );
};

export default Menu;