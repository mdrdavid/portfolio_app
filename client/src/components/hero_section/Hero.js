
import React from 'react'
import "./hero.css"
import { GiHamburgerMenu } from "react-icons/gi"
import HeroMessage from './HeroMessage'

const Hero = () => {
  return (
    <div className='hero-section'>
      <GiHamburgerMenu className='mobile-nav-toggle' />
      <HeroMessage name={"DAVID MATOVU"} />
    </div>
  )
}

export default Hero