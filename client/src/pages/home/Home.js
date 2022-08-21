
import React from 'react'
import Hero from '../../components/hero_section/Hero'
import NavBar from '../../components/navbar/NavBar'
import Menu from '../../components/sidemenu/Menu'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Menu/>
        <Hero/>
    </div>
  )
}

export default Home