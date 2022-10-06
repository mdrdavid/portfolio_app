
import React from 'react'
import ProExperience from './ProExperience'
import ResumeSumary from './ResumeSumary'

const ResumeDetails = () => {
  return (
    <div className='resum-details' style={{display: "flex"}}>
        <ResumeSumary name={"David matovu"} title={"Sumary"} course1={"Bachelor of Information Technology"}
        course2={"Bachelor of Information Technology"} date={"2012-2016"} school={"Uganda Martyrs University"}
        course2={"Uganda Advanced Certificate of Education "} school2={"Central College Mityana "} date2={"2011"}/>
        <ProExperience title={"Professional Experience"} duty1={"Frontnd Developer"} duty2={"Backend Developer"} 
        date={"2022 Present"} location={"Sulzner sickcel Anaemina Foundation"}/>
    </div>
  )
}

export default ResumeDetails