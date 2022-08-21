import React from 'react'
import './nav_bar.css'
import{Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-container'>
        <Link to="/" className="link" style={{ textDecoration: "none", color: "inherit" }}>
            Home
            </Link>
            <Link to="/about" className="link" style={{ textDecoration: "none", color: "inherit" }}>
            About
            </Link>
            <Link to="/resume" className="link" style={{ textDecoration: "none", color: "inherit" }}>
           Resume
            </Link>
            <Link to="/portfolio" className="link" style={{ textDecoration: "none", color: "inherit" }}>
            Portfolio
            </Link>
            <Link to="/services" className="link" style={{ textDecoration: "none", color: "inherit" }}>
            Services
            </Link>

    </div>
  )
}

export default NavBar