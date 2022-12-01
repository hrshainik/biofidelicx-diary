import Head from 'next/head'
import React from 'react'
import { Header } from '../components'

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Sign up - biofidelicX</title>
      </Head>
      <Header title="Welcome" />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
          <h2 className="title">Login</h2>
        </div>
      </div>
    </>
  )
}

export default SignUp
