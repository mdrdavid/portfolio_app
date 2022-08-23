
import React from 'react'
import {FiChevronRight} from "react-icons/fi"

const BioInfo =()=>{

  return (
    <div className='bio-display'>
        <div>
        <ul>
            <li>
                <FiChevronRight className='icon'/>
                <strong>Birthday:</strong>
                <span> 28<sup>th</sup> feb 1991</span>
            </li>
            <li>
                <FiChevronRight className='icon'/>
                <strong>website:</strong>
                <span>david.ac.ug</span>
            </li>
            <li>
                <FiChevronRight className='icon'/>
                <strong>Phone:</strong>
                <span>+256 771 626 807</span>
            </li>
            <li>
                <FiChevronRight className='icon'/>
                <strong>Country:</strong>
                <span>Uganda</span>
            </li>
        </ul>
        </div>
        <div>
        <ul>
            <li>
                <FiChevronRight className='icon'/>
                <strong>Age:</strong>
                <span>30</span>
            </li>
            <li>
                <FiChevronRight className='icon'/>
                <strong>Education:</strong>
                <span>Degree</span>
            </li>
            <li>
                <FiChevronRight className='icon'/>
                <strong>Email:</strong>
                <span>davidmatovu88@gmail.com</span>
            </li>
            <li>
                <FiChevronRight className='icon'/>
                <strong>Freelancer:</strong>
                <span>Available</span>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default BioInfo
