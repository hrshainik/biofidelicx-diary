import Image from 'next/image'
import React from 'react'

const TeamMemberCard = () => {
  return (
    <div className="team-card">
      <div className="team-card-img relative">
        <Image
          src={'/dummymember.jpg'}
          layout="fill"
          className="h-full w-full object-cover"
          loading="lazy"
          alt="team member"
        />
      </div>
      <div className="team-card-info">
        <h2>Name</h2>
        <span>Designation</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          tempore, recusandae voluptatibus minima dolorum harum eos dolor nisi.
          Accusamus, quidem.
        </p>
        <div className="socials"></div>
      </div>
    </div>
  )
}

export default TeamMemberCard
