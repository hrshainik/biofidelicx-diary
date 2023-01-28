import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  Categories,
  FeaturedPosts,
  Header,
  Loader,
  PostWidget,
  RegularPostCard,
} from '../../components'
import { getPosts, getTotalPostNumber } from '../../services'

const limit = 10

const Home = ({ currentPageNumber, hasNextPage, hasPreviousPage, posts }) => {
  if (!hasNextPage && !hasPreviousPage) {
    return null
  }

  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

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
          {posts.map(({ node: post }, i) => (
            <RegularPostCard key={i} post={post} />
          ))}
          <div className="pagination">
            {hasPreviousPage ? (
              <Link
                href={`${
                  currentPageNumber === 2
                    ? '/'
                    : `/post-page/${currentPageNumber - 1}`
                }`}
              >
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

            {hasNextPage ? (
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

export async function getStaticPaths() {
  const { aggregate } = await getTotalPostNumber()

  function* numberOfPages({ total, limit }) {
    let page = 1
    let offset = 0

    while (offset < total) {
      yield page

      page++
      offset += limit
    }
  }

  const paths = [
    ...numberOfPages({
      total: aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const offset = Number((params.page - 1) * limit)
  const { edges: posts, pageInfo } = await getPosts(limit, offset)

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      currentPageNumber: Number(params.page) || null,
      posts,
      ...pageInfo,
    },
  }
}
