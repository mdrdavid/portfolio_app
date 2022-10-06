
import React from 'react'

import MainArea from '../../components/main_area/MainArea'
import NavBar from '../../components/navbar/NavBar'
import Hero from "../../components/hero_section/Hero"
import Menu from "../../components/sidemenu/Menu"
import HeroMessage from '../../components/hero_section/HeroMessage'


const Home = () => {
  return (
    <>
    <NavBar/>
    <div id="home">
        <MainArea>
          <Hero>
      <HeroMessage name={"DAVID MATOVU"} />
          </Hero>
          <Menu/>
        </MainArea>
    </div>
    </>
  )
}

export default Home