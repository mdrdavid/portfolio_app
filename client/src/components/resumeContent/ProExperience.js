
import React from 'react'

const ProExperience = ({name,title, company1, company2,date,location}) => {
  return (
    <div>
      <div className='name'>
        <h3>{name}</h3>
      </div>
      <div className='company-detail'>
        <h3>{title}</h3>
        <div className='company'>
          <h3 className='company-name'>{company1}</h3>
          <span>{date}</span>
          <h6>{location}</h6>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
        <div className='company'>
          <h3 className='company-name'>{company2}</h3>
          <span>{date}</span>
          <h6>{location}</h6>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProExperience