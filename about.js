import Head from 'next/head'
import React from 'react'
import { Header } from './components'

const About = () => {
  return (
    <>
      <Head>
        <title>About - biofidelicX</title>
      </Head>
      <Header title="About Us" imageUrl={'/hero-img.jpg'} />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details !max-w-screen-lg">
          <div className="post-shadow"></div>
          <div className="mb-10">
            <h2 className="title">Our Mission</h2>
            <p className="para">
              To revolutionize the way biology is taught and learned by
              utilizing cutting-edge technology to create engaging, interactive
              and personalized learning experiences for students and
              professionals alike, advancing the future of bio-science education
              and research.
            </p>
          </div>
          <h2 className="title">Our Leading, Strong and Creative Team</h2>
          <div className="team-cards">
            <TeamMemberCard
              name="Habibur Rahman"
              designation="CEO & Software Developer"
              bio="I have a vision with a passion for using technology to advance the field of bio-science education. With 2 years of experience in both bio-science & education technology to enhance education & has a vision for how our solutions can transform the way bio-science is taught & learned."
              img="habibur-rahman.jpg"
            />
            <TeamMemberCard
              name="Mehedi Hasan"
              designation="Font-End Developer"
              bio="I am a front-end web developer, has 2 of experience creating engaging and user-friendly websites and web applications. With a strong background in HTML, CSS, and JavaScript, I have the technical skills to bring designs to life and create seamless user experiences."
              img="mehedi-hasan.jpg"
            />
            <TeamMemberCard
              name="Sujoy Kumar Das"
              designation="Content Writer"
              bio="I am a bio-science writer with a passion for sharing the exciting advancements in the field with a broad audience. From the intricacies of genetics to the latest breakthroughs in medical research, my articles provide informative perspectives on the biological world around us."
              img="sujoy-kumar-das.jpg"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
