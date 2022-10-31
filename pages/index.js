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
  console.log(pageInfo)
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

      <Header title="Main Header" imageUrl={'/hero-img.jpg'} />
      <FeaturedPosts />
      <div className="container mx-auto grid grid-cols-1 gap-12 p-5 sm:p-0 lg:grid-cols-12">
        <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
          {posts.map(({ node: post }, i) =>
            post.specialPost ? (
              <SpecialPostCard key={i} post={post} />
            ) : (
              <RegularPostCard key={i} post={post} />
            )
          )}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-20">
            <PostWidget />
            {/* <Categories /> */}
          </div>
        </div>
        <Link href={`/post-page/${currentPageNumber - 1}`}>Prev</Link>
        <Link href={`/post-page/${currentPageNumber + 1}`}>
          <a>Next</a>
        </Link>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  // async function* fetchData() {
  //   let offset = 0
  //   let hasNextPage = true

  // while (hasNextPage) {
  //   const { edges: posts, pageInfo } = await getPosts(limit, offset)

  //   hasNextPage = pageInfo.hasNextPage
  //   offset += limit

  //   yield posts
  // }
  const offset = 0

  const { edges: posts, pageInfo } = await getPosts(limit, 0)
  // }

  // async function paginatedQuery() {
  //   const iterator = fetchData()

  //   let data = []

  //   for await (const posts of iterator) data = [...data, ...posts]

  //   return data
  // }

  // const posts = await paginatedQuery()

  return {
    props: {
      posts,
      pageInfo,
      currentPageNumber: 1,
    },
  }
}
