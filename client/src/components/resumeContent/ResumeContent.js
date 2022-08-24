
import React from 'react'
import AboutTop from '../aboutDavid/AboutTop'
import "./resume.css"
import ResumeDetails from './ResumeDetails'

const ResumeContent = () => {
  return (
    <div className='resume'>
            <div className='content'>
                <AboutTop title={"Resume"} className="title"/>
                <ResumeDetails/>
            </div>
        </div>
  )
}

export default ResumeContent