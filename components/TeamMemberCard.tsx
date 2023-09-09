import Image from 'next/image'
import React from 'react'

interface TeamMemberCardProps {
  name: string
  designation: string
  bio: string
  img: string
}

const TeamMemberCard: React.FC = ({
  name,
  designation,
  bio,
  img,
}: TeamMemberCardProps) => {
  return (
    <div className="team-card">
      <div className="team-card-img relative">
        <Image
          src={`/${img}`}
          fill
          className="h-full w-full object-cover"
          alt="team member"
          loader={() => `/${img}`}
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
