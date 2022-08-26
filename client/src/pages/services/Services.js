
import React from 'react'
import MainArea from '../../components/main_area/MainArea'
import NavBar from '../../components/navbar/NavBar'
import ServiceContent from '../../components/serviceContent/ ServiceContent'
import Menu from '../../components/sidemenu/Menu'

const Services = () => {
  return (
      <>
      <NavBar/>
      <div className='services' id='services'>
        <MainArea>
            <Menu/>
            <ServiceContent/>
        </MainArea>
      </div>
      </>
    
  )
}

export default Services