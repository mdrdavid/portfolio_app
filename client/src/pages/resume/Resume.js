
import React from 'react'
import MainArea from '../../components/main_area/MainArea'
import NavBar from '../../components/navbar/NavBar'
import Menu from '../../components/sidemenu/Menu'

 const Resume = () => {
  return (
    <>
    <NavBar/>
    <div className='resume' id='resume'>
      <MainArea>
        <Menu/>
      </MainArea>
      Resume</div>
    </>
    
  )
}
export default Resume
