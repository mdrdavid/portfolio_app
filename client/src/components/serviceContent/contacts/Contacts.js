
import React from 'react'
import AboutTop from '../../aboutDavid/AboutTop'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

const Contacts = () => {
    return (
        <div>
            <AboutTop title={"Contacts"} className="title" />
            <div className='contact-info'>
                <ContactDetails/>
                <ContactForm/>
                </div>
        </div>
    )
}

export default Contacts