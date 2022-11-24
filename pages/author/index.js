import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Header, PostWidget } from '../../components'
import { getAuthors } from '../../services'

const Author = ({ authors }) => {
  return (
    <>
      <Head>
        <title>Authors</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="biofidelicx diary" />
        <meta
          name="keywords"
          content="biofidelicX diary, biofidelicX academy"
        />
        <meta name="author" content="Habibur Rahman" />
      </Head>
      <Header />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="z-50 grid grid-cols-1 gap-12 bg-white-500 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
              {authors.map(({ node: author }) => (
                <Link key={author.slug} href={`/author/${author.slug}`}>
                  <h1>{author.name}</h1>
                </Link>
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky lg:top-20">
                <PostWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Author

export async function getStaticProps() {
  const authors = await getAuthors()

  return {
    props: { authors },
  }
}
