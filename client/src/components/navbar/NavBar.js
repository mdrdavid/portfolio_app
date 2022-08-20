import React from 'react'
import './nav_bar.css'
import{Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavbarLink = styled(Link)`
 color:white;
 font-size: 18px;
 text-decoration: none;
 $:hover: background-color: blue;
 &:hover,
&:focus{
  color: #149ddd;
  padding: 12px 15px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
};
&:active{
    color: white;
};`

const NavBar = () => {
  return (
    <div className='nav-container'>
      <NavbarLink to="/" >Home</NavbarLink>
      <NavbarLink to="/about" >About</NavbarLink>
      <NavbarLink to="resume" >Resume</NavbarLink>
      <NavbarLink to="/portfolio" >Portfolio</NavbarLink>
      <NavbarLink to="/services" >Services</NavbarLink>
    </div>
  )
}

export default NavBar