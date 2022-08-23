
import React from 'react'
import davi from "../../assets/images/davi.jpg"

const BioData = ({title}) => {
    return (
        <div className='profile-info'>
            <div className='profile-image'>
                <img src={davi} alt='' style={{ maxWidth: "100%", maxHeight: "100%", verticalAlign: "middle" }} />
            </div>
            <div className='profile-message'>
                <h3>{title}</h3>
                <p>
                    I am a developer enthusiast with a passion for programming.
                    ReactJS and Android development are my specialities
                </p>
            </div>
        </div>
    )
}

export default BioData