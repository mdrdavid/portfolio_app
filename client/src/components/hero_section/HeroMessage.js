
import React from 'react'
import Typed from 'react-typed';


const content = () => {
    const message = [" Welcome I AM A"];
    let i = 0;
    let messageArray = [];
    for (i = 0; i < message.length; i++) {
        messageArray.push(
            <div className='background'>
                <h1 className="typewriter">
                    {message[i]}
                </h1>
            </div>
        );
    }
    return messageArray;
}

const HeroMessage = ({ name }) => {
    return (
        <div className="hero">
            <h1>{name}</h1>
            <p>
                {content()}
                <Typed
                    strings={['Developer',
                        'Freelancer']}
                    typeSpeed={20}
                    backSpeed={20}
                />
                <br></br>
                <Typed />
            </p>
        </div>
    )
}

export default HeroMessage