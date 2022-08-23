
import React from 'react'
import AboutHeader from '../../components/about_david/AboutHeader'
import MainArea from '../../components/main_area/MainArea'
import NavBar from '../../components/navbar/NavBar'
import Menu from '../../components/sidemenu/Menu'
import Hero from "../../components/about_david/AboutHeader"


const About = () => {
  return (
    <>
     <NavBar/>
    <div className='abouts' id="about">
      <MainArea>
        <Menu/>
        <Hero>
          <AboutHeader/>
        </Hero>
      </MainArea>
      </div>
      </>
  )
}

export default About