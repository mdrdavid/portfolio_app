
import React from 'react'
import {BsGeoAlt} from "react-icons/bs"
import {BsEnvelope} from "react-icons/bs"
import {BiPhone} from "react-icons/bi"

const ContactDetails = () => {
  return (
    <div className='contact-details'>
        <div className='address'>
            <BsGeoAlt className='icon'/>
            <h4 className='text'>Location:</h4>
            <p>Kampala Uganda</p>
        </div>
        <div className='email'>
            <BsEnvelope className='icon'/>
            <h4 className='text'>Email:</h4>
            <p>davidmatovu88@gmail.com</p>
        </div>
        <div className='phone'>
            <BiPhone className='icon'/>
            <h4 className='text'>Call:</h4>
            <p>+256 771 626 807</p>
        </div>
        <iframe src="https://www.google.com/maps/place/Kampala/@0.3130291,32.5290843,12z/data=!3m1!4b1!4m13!1m7!3m6!1s0x1771a69f6499f945:0x874155ce43014549!2sUganda!3b1!8m2!3d1.373333!4d32.290275!3m4!1s0x177dbc0f9d74b39b:0x4538903dd96b6fec!8m2!3d0.3474405!4d32.5827026" 
        style={{width: "100%", height: "290px" , allowfullscreen: "" , frameborder: "0"}}></iframe>
    </div>
  )
}

export default ContactDetails