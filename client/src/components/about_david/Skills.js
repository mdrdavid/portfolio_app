
import React from 'react'
import AboutTop from './AboutTop'

const Skills = () => {
  return (
    <div className='skilss-container'>
      <AboutTop title={"Skills"} />
      <div className='technology'>
        <div className='progress'>
          <span className='skill'>Javascript</span>
        </div>
        <div className='progress'>
          <span className='skill'>ReactJs</span>
        </div>
        <div className='progress'>
          <span className='skill'>NodeJs</span>
        </div>
        <div className='progress'>
          <span className='skill'>Html</span>
        </div>
        <div className='progress'>
          <span className='skill'>Css</span>
        </div>
      </div>
    </div>
  )
}

export default Skills