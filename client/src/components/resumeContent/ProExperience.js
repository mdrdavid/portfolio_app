
import React from 'react'

const ProExperience = ({name,title, duty1, duty2,date,location}) => {
  return (
    <div>
      <div className='name'>
      <h4 className='resume-title'>{title}</h4>
      </div>
      <div className='resume-item'>
        <div className='resume-item1'>
          <h4 className='company-name'>{duty1}</h4>
          <span>{date}</span>
          <p><em>{location}</em></p>
          <ul>
            <li>
            Lead in the design, development, and implementation of the UI, layout features
            </li>
            <li>
            Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.
            </li>
            <li>
            Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design
            </li>
            <li>
            Oversee the efficient use of production project budgets ranging from $2,000 - $25,000
            </li>
          </ul>
        </div>
        <div className='resume-item2'>
          <h3 className='company-name'>{duty2}</h3>
          <span>{date}</span>
          <p><em>{location}</em></p>
          <ul>
            <li>
            Lead in the design, development, and implementation of the graphic, layout, and production communication materials
            </li>
            <li>
            Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.
            </li>
            <li>
            upervise the assessment of all graphic materials in order to ensure quality and accuracy of the design
            </li>
            <li>
            Oversee the efficient use of production project budgets ranging from $2,000 - $25,000
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProExperience