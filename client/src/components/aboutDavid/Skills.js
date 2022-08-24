
import React from 'react'
import AboutTop from './AboutTop'

const Skills = ({js, rj, nd, ht, cs}) => {
  return (
    <div className='skilss-container'>
      <AboutTop title={"Skills"} />
      <div className='technology'>
        <div className='progress'>
          <span className='skill'>{js}</span>
        </div>
        <div className='progress'>
          <span className='skill'>{rj}</span>
        </div>
        <div className='progress'>
          <span className='skill'>{nd}</span>
        </div>
        <div className='progress'>
          <span className='skill'>{ht}</span>
        </div>
        <div className='progress'>
          <span className='skill'>{cs}</span>
        </div>
      </div>
    </div>
  )
}

export default Skills