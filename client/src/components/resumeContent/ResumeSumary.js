
import React from 'react'

const ResumeSumary = ({ name, title, course1, course2, date, school }) => {
  return (
    <div>
      <div className='name'>
        <h3>{title}</h3>
      </div>
      <div className='education'>
        <h3>{name}</h3>
        <p>
        Innovative and deadline-driven Graphic Designer with 3+ years of experience 
        designing and developing user-centered digital/print marketing material from initial concept to final, 
        polished deliverable.
        </p>
        <ul>
          <li>Kampala uganda</li>
          <li>+256 771 626 807</li>
          <li>davidmatovu@gmail.com</li>
        </ul>
        <div className='course'>
          <h3 className='course-name'>{course1}</h3>
          <span>{date}</span>
          <h6>{school}</h6>
        </div>
        <div className='course'>
          <h3 className='course-name'>{course2}</h3>
        </div>
      </div>

    </div>
  )
}

export default ResumeSumary