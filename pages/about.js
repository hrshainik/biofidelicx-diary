import Head from 'next/head'
import React from 'react'
import { Header } from '../components'
import AuthorCard from '../components/AuthorCard'

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
          <div className="author-cards">
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
