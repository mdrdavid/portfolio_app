
import React from 'react'

const ResumeSumary = ({ name, title, course1, course2, date, school, school2, date2 }) => {
  return (
    <div>
      <div className='name'>
        <h4 className='resume-title'>{title}</h4>
      </div>
      <div className='education'>
        <h4>{name}</h4>
        <p>
        Innovative and deadline-driven software Engineer with 2+ years of experience 
        designing and developing user-centered software features;
        </p>
        <ul>
          <li>Kampala uganda</li>
          <li>+256 771 626 807</li>
          <li>davidmatovu@gmail.com</li>
        </ul>
        <div className='course'>
          <h4 className='course-name'>{course1}</h4>
          <span>{date}</span>
          <p><em>{school}</em></p>
          <p>While a University I participated in a number of innovtive camps and learnt alot 
            in line with coordination and team working on different occasions.
            Also participated in leadership as Guild minister in charge of Academics  at students council 
          </p>
        </div>
        <div className='course'>
          <h3 className='course-name'>{course2}</h3>
          <span>{date2}</span>
          <p><em>{school2}</em></p>
        </div>
      </div>

    </div>
  )
}

export default ResumeSumary