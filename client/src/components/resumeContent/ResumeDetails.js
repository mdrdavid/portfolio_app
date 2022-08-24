
import React from 'react'
import ProExperience from './ProExperience'
import ResumeSumary from './ResumeSumary'

const ResumeDetails = () => {
  return (
    <div className='resum-details' style={{display: "flex"}}>
        <ResumeSumary name={"David matovu"} title={"Sumary"} course1={"Bachelor of Information Technology"}
        course2={"Bachelor of Information Technology"} date={"2011-2015"} school={"Muteesa 1 Royal University"}/>
        <ProExperience title={"Professional Experience"} company1={"devix"} company2={"devix"} date={"2022 Present"}location={"kampala"}/>
    </div>
  )
}

export default ResumeDetails