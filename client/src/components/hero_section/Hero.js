
import React from 'react'
import "./hero.css"
import {GiHamburgerMenu} from "react-icons/gi"
import Typed from 'react-typed';


const Content =()=>{
  const message =["WELCOME I AM A"];
  let i =0 ;
  let jsxArray = [];
  for(i=0; i<message.length;i++){
    jsxArray.push(
      <div className='background'>
        <h1 className="typewriter">
            {message[i]}    
        </h1>
      </div>
     );
  }
  return jsxArray;
}

const Hero = () => {
  
  
  return (

    
    <div className='hero-section'>
      <GiHamburgerMenu className='mobile-nav-toggle'/>
    <div className="hero">
      <h1>DAVID MATOVU</h1>

        <p>
            <Content/>
            <Typed
                    strings={['Developer', 
                    'Freelancer']}
                    typeSpeed={20}
                    backSpeed={50}
                />
                <br></br>
                <Typed/>

            
        </p>
    </div>
    </div>
  )
}

export default Hero