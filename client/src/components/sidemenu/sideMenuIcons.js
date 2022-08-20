
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai"
import {BiFileBlank} from "react-icons/bi"
import {BiBookContent} from "react-icons/bi"
import {BiServer} from "react-icons/bi"
import { Link } from "react-router-dom";

const getIcon = (iconName) => {
  let icon = null;
  switch (iconName) {
    case "home":
      icon = <AiOutlineHome />
      break;
    case "about":
      icon = <Link to="about"><AiOutlineUser /></Link>;
      break;
    case "resume":
      icon = <Link to="resume"><BiFileBlank /></Link>;
      break;
    case "portfolio":
        icon = <Link to="about"><BiBookContent /></Link>;
      break;
    case "services":
        icon = <Link to="about"><BiServer /></Link>;
      break;
    default:
      break;
  }
  return icon
}

export const Sidelinks = (props) => {
  const { link: { icon, name }, } = props

  return (
    <div className="sideLink">
      <div className= "icons">{getIcon(icon)}{name}</div>
    </div>
  
  )
};
