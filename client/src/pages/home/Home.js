
import React from 'react'

import MainArea from '../../components/main_area/MainArea'
import NavBar from '../../components/navbar/NavBar'
import Hero from "../../components/hero_section/Hero"
import Menu from "../../components/sidemenu/Menu"

const Home = () => {
  return (
    <div id="home">
        <NavBar/>
        <MainArea>
          <Hero/>
          <Menu/>
        </MainArea>
    </div>
  )
}

export default Home