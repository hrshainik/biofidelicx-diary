import Head from 'next/head'
import { useEffect } from 'react'
import {
  FeaturedPosts,
  Header,
  PostWidget,
  RegularPostCard,
  SpecialPostCard,
} from '../components'
import { getPosts } from '../services'

const Home = ({ postsInfo }) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  const { edges: posts, pageInfo, aggregate } = postsInfo
  const { count: totalItems } = aggregate
  console.log(totalItems)
  console.log(posts)
  console.log(pageInfo)
  const { pageSize } = pageInfo
  let pages = totalItems / pageSize
  if (Number.isInteger(pages)) {
    pages
  } else {
    pages = Math.floor(pages + 1)
  }

  console.log(pages)

  const arr = [...Array(pages).keys()]
  console.log(arr)

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
        <ul>
          {arr.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps({ params }) {
  const postsInfo = (await getPosts(1)) || []

  return {
    props: { postsInfo },
  }
}
