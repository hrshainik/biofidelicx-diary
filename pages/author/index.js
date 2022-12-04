import Head from 'next/head'
import Image from 'next/image'
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
      <Header title="Authors" />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="z-50 grid grid-cols-1 gap-12 bg-white-500 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
              {authors.map(({ node: author }) => (
                <Link key={author.slug} href={`/author/${author.slug}`}>
                  <div className="relative">
                    <div className="relative h-48 w-[60%] sm:h-56 md:h-44 lg:h-48 xl:h-52 2xl:h-56">
                      <Image
                        src={author.photo.url}
                        layout="fill"
                        className="h-full w-full object-cover"
                        loading="lazy"
                        alt="author"
                      />
                    </div>
                    <div className="border-1 absolute top-4 right-0 w-[50%] border border-midnight-500/40 bg-white-500/60 p-3">
                      <h2 className="font-h text-lg">{author.name}</h2>
                      <p className="text-xs">
                        {author.bio.slice(0, 45)}
                        {author.bio.length > 45 ? '...' : null}
                      </p>
                      <div className=""></div>
                    </div>
                  </div>
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
