import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import {
  Categories,
  FeaturedPosts,
  Header,
  PostWidget,
  RegularPostCard,
  SpecialPostCard,
} from '../components'
import { getPosts, getSpecialPost } from '../services'

const Home = ({ posts, pageInfo, currentPageNumber, specialPost }) => {
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
          content="biofidelicX diary is the ideal location to stay informed and up-to-date on the most recent research and discoveries in bio-science, whether you're a student, a scientist, or simply someone with a passion for learning about the natural world."
        />
        <meta
          name="keywords"
          content="biofidelicx diary, biofidelicx academy"
        />
        <meta name="author" content="Habibur Rahman" />
      </Head>

      <Header
        title="Unlock Your Potential in Bio-Science: Learn, Explore, Discover"
        imageUrl={'/hero-img.jpg'}
      />
      <FeaturedPosts />
      <div className="container mx-auto grid grid-cols-1 gap-12 p-5 lg:grid-cols-12">
        <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
          {specialPost.map(({ node: post }, i) => (
            <SpecialPostCard post={post} key={i} />
          ))}
          {posts.map(({ node: post }, i) => (
            <RegularPostCard key={i} post={post} />
          ))}
          <div className="pagination">
            {pageInfo.hasPreviousPage ? (
              <Link href={`/post-page/${currentPageNumber - 1}`}>
                <a className="btn-outline cursor-pointer font-t text-xs font-bold tracking-sm">
                  &larr; Prev
                </a>
              </Link>
            ) : (
              <Link href={`/post-page/${currentPageNumber - 1}`}>
                <a
                  className="btn-outline cursor-not-allowed font-t text-xs font-bold tracking-sm opacity-50"
                  onClick={(e) => e.preventDefault()}
                >
                  &larr; Prev
                </a>
              </Link>
            )}

            {pageInfo.hasNextPage ? (
              <Link href={`/post-page/${currentPageNumber + 1}`}>
                <a className="btn-outline font-t text-xs font-bold tracking-sm">
                  Next &rarr;
                </a>
              </Link>
            ) : (
              <Link href={`/post-page/${currentPageNumber + 1}`}>
                <a
                  className="btn-outline cursor-not-allowed font-t text-xs font-bold tracking-sm opacity-50"
                  onClick={(e) => e.preventDefault()}
                >
                  Next &rarr;
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative flex flex-col gap-6 lg:sticky lg:top-20">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const limit = 10
  const offset = 0

  const { edges: posts, pageInfo } = await getPosts(limit, offset)
  const { edges: specialPost } = await getSpecialPost()

  return {
    props: {
      posts,
      pageInfo,
      currentPageNumber: 1,
      specialPost,
    },
  }
}
