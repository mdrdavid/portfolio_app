
import React from 'react'
import {Link} from "react-router-dom"
import "./social.css"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"


const SocialMdeiaLinks = () => {
  return (
    <div className='social'>
      <Link to={{ pathname: "https://www.linkedin.com/in/david-matovu-a9b981202/" }} 
      className='social-link' >
        <AiFillLinkedin className='link-icon'/></Link>
         {/* <Link to="#" className='social-link'><AiFillLinkedin className='link-icon'/></Link> */}
    <Link to={{pathname:"https://github.com/mdrdavid"}} className='social-link'>
    <BsGithub className='link-icon'/></Link>
    <Link to="#" className='social-link'><FiTwitter className='link-icon'/></Link>
    </div>
  
  )
}

export default SocialMdeiaLinks