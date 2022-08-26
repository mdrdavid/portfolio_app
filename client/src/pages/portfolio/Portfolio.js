
import React from 'react'
import MainArea from '../../components/main_area/MainArea'
import NavBar from '../../components/navbar/NavBar'
import Menu from '../../components/sidemenu/Menu'

const Portfolio = () => {
  return (
      <>
      <NavBar/>
      <div className='services' id='services'>
        <MainArea>
            <Menu/>
        </MainArea>
      </div>
      </>
    
  )
}

export default Portfolio