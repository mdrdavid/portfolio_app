
import React from 'react'
import "./about.css"
import AboutTop from './AboutTop'
import BioData from './BioData'
import Facts from './Facts'
import Skills from './Skills'

const AboutHeader = () => {
    return (
        <div className='about'>
            <div className='content'>
                <AboutTop className="title"/>
                <BioData title={"web developer"}/>
                <Facts/>
                <Skills/>
            </div>
        </div>
    )
}

export default AboutHeader