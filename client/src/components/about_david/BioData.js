
import React from 'react'
import david2 from "../../assets/images/david2.jpg"
import BioInfo from './BioInfo'

const BioData = ({title}) => {
    return (
        <div className='profile-info'>
            <div className='profile-image'>
                <img src={david2} alt='' style={{ maxWidth: "100%", maxHeight: "100%", verticalAlign: "middle" }} />
            </div>
            <div className='profile-message'>
                <h3>{title}</h3>
                <p className='italic'>
                <span>I am a developer enthusiast with a passion for programming.</span>
                    <span>ReactJS and Android development are my specialities</span>
                </p>
                <BioInfo/>
                <p className='lower-content'>
                    <span>I am a developer enthusiast with a passion for programming.</span>
                    <span>ReactJS and Android development are my specialities</span>
                    <span>I am a developer enthusiast with a passion for programming.</span>
                    <span>ReactJS and Android development are my specialities</span>
                    <span>I am a developer enthusiast with a passion for programming.</span>
                    <span>ReactJS and Android development are my specialities</span>
                </p>
            </div>
        </div>
    )
}

export default BioData