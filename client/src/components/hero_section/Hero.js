
import React from 'react'
import "./hero.css"
import {GiHamburgerMenu} from "react-icons/gi"

const Hero = () => {
  return (
    <div className='hero-section'>
      <GiHamburgerMenu className='mobile-nav-toggle'/>
    <div className="hero">
      <h1>DAVID MATOVU</h1>
        <p>
            I'M Developer
            <span className='typed' data-typed-items="Developer, Freelancer"></span>
            <span className='typed-cursor typed-cursor--blink arial-hidden="true"'></span>
        </p>
    </div>
    </div>
  )
}

export default Hero