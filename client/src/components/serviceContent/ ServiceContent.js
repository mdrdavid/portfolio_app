
import React from 'react'
import "../resumeContent/styles/resume.css"
import Contacts from './contacts/Contacts'
import { ShowCase } from './ShowCase'
import Testimonials from './Testimonials'


const ServiceContent = () => {
  return (
    <div className=''>
            <div className='content'>
                <ShowCase/>
                <Testimonials/>
                <Contacts/>
            </div>
        </div>
  )
}

export default ServiceContent