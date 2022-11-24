import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import {
  FeaturedPosts,
  Header,
  PostWidget,
  RegularPostCard,
  SpecialPostCard,
} from '../components'
import { getPosts } from '../services'

let limit = 3

const Home = ({ posts, pageInfo, currentPageNumber }) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <>
      <Head>
        <title>biofidelicX diary</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Here you find bio-science related blogs."
        />
        <meta
          name="keywords"
          content="biofidelicx diary, biofidelicx academy"
        />
        <meta name="author" content="Habibur Rahman" />
      </Head>

      <Header
        title="Come here to fall in love with bio-science."
        imageUrl={'/hero-img.jpg'}
      />
      <FeaturedPosts />
      <div className="container mx-auto grid grid-cols-1 gap-12 p-5 lg:grid-cols-12">
        <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
          {posts.map(({ node: post }, i) =>
            post.specialPost ? (
              <SpecialPostCard key={i} post={post} />
            ) : (
              <RegularPostCard key={i} post={post} />
            )
          )}
          <div className="pagination">
            <Link href={`/post-page/${currentPageNumber - 1}`}>
              <a className="btn btn-outline font-t text-xs font-bold tracking-sm">
                &larr; Prev
              </a>
            </Link>
            <Link href={`/post-page/${currentPageNumber + 1}`}>
              <a className="btn btn-outline font-t text-xs font-bold tracking-sm">
                Next &rarr;
              </a>
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-20">
            <PostWidget />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const offset = 0

  const { edges: posts, pageInfo } = await getPosts(limit, 0)

  return {
    props: {
      posts,
      pageInfo,
      currentPageNumber: 1,
    },
  }
}
