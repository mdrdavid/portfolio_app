
import React, { useState } from 'react'

const ContactForm = () => {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [message, setMessage]=useState({
        textmessage: "",
        sub: ""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('')
        setMessage('')
        setName('')
        };
        const handleMessage = (event) => {
            setMessage({ ...message, [event.target.name]: event.target.value });
            };
    return (
        <div className='contact-form'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='form-group'>
                        <label>Your Name</label>
                        <input type='text' className='input' 
                        name='name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Your Email</label>
                        <input type='email' className='input' 
                        name='name'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                </div >
               
                    <div className='form-group'>
                        <label>Subject</label>
                        <input type='text' className='input' 
                        name='sub'
                        value={message.sub}
                        onChange={handleMessage}/>
                    </div>
                    <div className='form-group'>
                        <label>Message</label>
                        <textarea  className='textarea' rows='10'
                        name='textmessage'
                        value={message.textmessage}
                        onChange={handleMessage}/>
                    </div>
                    <div className='form-button'>
                        <button className='button'>Send Message</button>
                    </div>
              
            </form>
        </div>
    )
}

export default ContactForm