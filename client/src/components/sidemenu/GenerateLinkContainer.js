
import React from 'react'
import { Sidelinks } from "../sidemenu/sideMenuIcons"

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
  
const GenerateLinkContainer = () => {
  return (
      <>
      {generateLinkContiner()}
      </>
  
  )
}

export default GenerateLinkContainer

