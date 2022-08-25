
import React from 'react'
import Hero from '../../components/hero_section/Hero'
import MainArea from '../../components/main_area/MainArea'
import NavBar from '../../components/navbar/NavBar'
import ResumeContent from '../../components/resumeContent/ResumeContent'
import Menu from '../../components/sidemenu/Menu'


 const Resume = () => {
  return (
    <>
    <NavBar/>
    <div className='resume' id='resume'>
      <MainArea>
        <Menu/>
        {/* <Hero> */}
        <ResumeContent/>
        {/* </Hero> */}
      </MainArea>
    </div>
    </>
    
  )
}
export default Resume
