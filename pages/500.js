import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import errorImg from '../public/500.svg'

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>Server Problem - biofidelicX academy</title>
      </Head>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <Image src={notFoundImg} />
        <Link href="/">
          <span className="cursor-pointer bg-aquamarine-500 px-4 py-3 font-bold uppercase text-midnight-500">
            Go Back
          </span>
        </Link>
      </div>
    </>
  )
}

export default Custom500
