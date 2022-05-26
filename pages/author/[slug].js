import moment from 'moment'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { Loader, RegularPostCard } from '../../components'
import { getAuthorDetails, getAuthors } from '../../services'

const AuthorDetails = ({ author }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }
  return (
    <>
      <Head>
        <title>{author.name} - biofidelicX diary</title>
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
      <div className="mx-auto mb-8 px-10">
        <div className="container mx-auto mt-12">
          <h1>{author.name}</h1>
          <p>{author.bio}</p>
          <p>Joined on {moment(author.createdAt).format('MMM DD, YYYY')}</p>
          <a href={author.facebook}>FB</a>
          <a href={author.twitter}>TW</a>
          <a href={author.linkedin}>LI</a>
          <a href={author.website}>WEB</a>
          <a href={author.email}>E</a>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {author.post.map((post) => (
              <RegularPostCard post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorDetails

export async function getStaticProps({ params }) {
  const authorDetails = await getAuthorDetails(params.slug)

  return {
    props: { author: authorDetails },
  }
}

export async function getStaticPaths() {
  const authors = await getAuthors()

  return {
    paths: authors.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
