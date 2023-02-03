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
      <Header title="About Us" imageUrl={'/hero-img.jpg'} />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="mb-10">
            <h2 className="title">Our Mission</h2>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              enim iusto aspernatur ut? Explicabo culpa veritatis mollitia
              sapiente. Accusamus odit ab repellat laudantium labore id, commodi
              enim placeat fugiat tempore!
            </p>
          </div>
          <h2 className="title">Our Leading, Strong and Creative Team</h2>
          <div className="team-cards">
            <TeamMemberCard
              name="Habibur Rahman"
              designation="CEO"
              bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              enim iusto aspernatur ut? Explicabo culpa veritatis mollitia
              sapiente. Accusamus odit ab repellat laudantium labore id, commodi
              enim placeat fugiat tempore!"
              img="dummymember.jpg"
            />
            <TeamMemberCard
              name="Mehedi Hasan"
              designation="Font-End Developer"
              bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              enim iusto aspernatur ut? Explicabo culpa veritatis mollitia
              sapiente. Accusamus odit ab repellat laudantium labore id, commodi
              enim placeat fugiat tempore!"
              img="hero-img.jpg"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
