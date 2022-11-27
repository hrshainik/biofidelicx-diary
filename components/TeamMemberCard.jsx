import Image from 'next/image'
import React from 'react'

const TeamMemberCard = ({ name, designation, bio, img }) => {
  return (
    <div className="team-card">
      <div className="team-card-img relative">
        <Image
          src={`/${img}`}
          layout="fill"
          className="h-full w-full object-cover"
          loading="lazy"
          alt="team member"
        />
      </div>
      <div className="team-card-info">
        <h2>{name}</h2>
        <span>{designation}</span>
        <p>{bio}</p>
        <div className="socials"></div>
      </div>
    </div>
  )
}

export default TeamMemberCard
