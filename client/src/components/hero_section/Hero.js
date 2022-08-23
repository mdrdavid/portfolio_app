
import React from 'react'
import "./hero.css"



const Hero = ({children}) => {
  return (
    <div className='hero-section'>
      {children}
    </div>
  )
}

export default Hero