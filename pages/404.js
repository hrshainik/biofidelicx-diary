import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import notFoundImg from '../public/404.svg'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - biofidelicX academy</title>
      </Head>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
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

export default Custom404
