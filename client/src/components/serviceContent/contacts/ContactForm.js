
import React from 'react'

const ContactForm = () => {
    return (
        <div className='contact-form'>
            <form className='form'>
                <div className='row'>
                    <div className='form-group'>
                        <label>Your Name</label>
                        <input type='text' className='input' />
                    </div>
                    <div className='form-group'>
                        <label>Your Email</label>
                        <input type='email' className='input' />
                    </div>

                </div >
               
                    <div className='form-group'>
                        <label>Subject</label>
                        <input type='text' className='input' />
                    </div>
                    <div className='form-group'>
                        <label>Message</label>
                        <textarea  className='textarea' rows='10'/>
                    </div>
                    <div className='form-button'>
                        <button className='button'>Send Message</button>
                    </div>
              
            </form>
        </div>
    )
}

export default ContactForm