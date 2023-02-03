import Head from 'next/head'
import React from 'react'
import { Categories, Header, PostWidget } from '../../components'
import AuthorCard from '../../components/AuthorCard'
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
        <meta name="description" content="biofidelicX diary's authors" />
        <meta
          name="keywords"
          content="biofidelicX diary, biofidelicX academy"
        />
        <meta name="author" content="Habibur Rahman" />
      </Head>
      <Header
        title="Authors"
        subText={`${authors.length} author`}
        imageUrl={'/hero-img.jpg'}
      />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="container -z-40 mx-auto grid grid-cols-1 gap-12 p-5 sm:p-0 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 content-start gap-6 md:grid-cols-2 lg:col-span-8">
              {authors.map(({ node: author }) => (
                <AuthorCard author={author} key={author.slug} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative flex flex-col gap-6 lg:sticky lg:top-20">
                <PostWidget />
                <Categories />
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
