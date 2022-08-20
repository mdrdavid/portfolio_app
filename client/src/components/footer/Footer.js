
import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='copyright'>
            <span>&copy; </span>Copyright Mdr2021
            </div>
            <div className='credits'>
                Designed by: 
                <a className="email" href='/about'>davidmatovu88@gmail.com</a>
            </div>
        </div>
    </div>
  )
}

export default Footer