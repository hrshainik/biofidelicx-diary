import Head from 'next/head'
import React from 'react'
import { Header } from '../components'
import TeamMemberCard from '../components/TeamMemberCard'

const About = () => {
  return (
    <>
      <Head>
        <title>About - biofidelicX</title>
      </Head>
      <Header title="About Us" />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="mission mb-12">
            <h2 className="title">Our Mission</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              enim iusto aspernatur ut? Explicabo culpa veritatis mollitia
              sapiente. Accusamus odit ab repellat laudantium labore id, commodi
              enim placeat fugiat tempore!
            </p>
          </div>
          <h2 className="title">Our Leading, Strong and Creative Team</h2>
          <div className="team-cards">
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
            <TeamMemberCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
