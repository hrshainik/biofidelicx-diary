import Head from 'next/head'
import React from 'react'
import { Header } from '../components'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - biofidelicX</title>
      </Head>
      <Header title="We'd love to hear from you" />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
        </div>
      </div>
    </>
  )
}

export default Contact
