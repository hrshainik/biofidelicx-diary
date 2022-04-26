import React from 'react'
import { getPosts, getPostDetails } from '../../services'
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
  Header,
} from '../../components'
import { useRouter } from 'next/router'
import Head from 'next/head'

const PostDetails = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={`${post.excerpt}`} />
        <meta
          name="keywords"
          content="biofidelicX diary, biofidelicX academy"
        />
        <meta name="author" content={`${post.author.name}`} />
      </Head>
      <Header
        title={post.title}
        imageUrl={post.featuredImage.url}
        category={post.categories[0].name}
        slug={post.categories[0].slug}
      />
      <div className="mx-auto mb-8">
        <div className="container mx-auto -mt-16 grid grid-cols-1 gap-12 bg-midnight-500 p-8 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              {/* <Categories /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const postDetails = await getPostDetails(params.slug)

  return {
    props: { post: postDetails },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
