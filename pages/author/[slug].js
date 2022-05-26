import { useRouter } from 'next/router'
import React from 'react'
import { Loader } from '../../components'
import { getAuthorDetails, getAuthors } from '../../services'

const AuthorDetails = ({ author }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div>
      <h1>{author.name}</h1>
    </div>
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
