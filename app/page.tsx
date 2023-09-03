'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Categories,
  FeaturedPosts,
  Header,
  PostWidget,
  RegularPostCard,
  SpecialPostCard,
} from '../components'
import { getPosts, getSpecialPost } from '../services'

const HomePage: React.FC = () => {
  const [postsData, setPostsData] = useState([])
  const [pageInfo, setPageInfo] = useState({})
  const [specialPost, setSpecialPost] = useState([])
  let currentPageNumber = 1

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limit = 10
        const offset = 0

        // Fetch posts
        const postsResponse = await getPosts(limit, offset)
        setPostsData(postsResponse.edges)
        setPageInfo(postsResponse.pageInfo)

        // Fetch special post
        const specialPostResponse = await getSpecialPost()
        console.log(specialPostResponse.edges)

        setSpecialPost(specialPostResponse.edges) // Assuming you want the first special post
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <>
      <Header
        title="Unlock Your Potential in Bio-Science: Learn, Explore, Discover"
        imageUrl={'/hero-img.jpg'}
      />
      <FeaturedPosts />
      <div className="container mx-auto grid grid-cols-1 gap-12 p-5 lg:grid-cols-12">
        <div className="col-span-1 grid grid-cols-1 content-start gap-6 md:grid-cols-2 lg:col-span-8">
          {specialPost.map(({ node: post }, i) => (
            <SpecialPostCard post={post} key={i} />
          ))}
          {postsData.map(({ node: post }, i) => (
            <RegularPostCard key={i} post={post} />
          ))}
          <div className="pagination">
            {pageInfo.hasPreviousPage ? (
              <Link
                href={`/post-page/${currentPageNumber - 1}`}
                className="btn-outline cursor-pointer font-t text-xs font-bold tracking-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                </svg>
                Prev
              </Link>
            ) : (
              <Link
                href={`/post-page/${currentPageNumber - 1}`}
                className="btn-outline cursor-not-allowed font-t text-xs font-bold tracking-sm opacity-50"
                onClick={(e) => e.preventDefault()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                </svg>
                Prev
              </Link>
            )}

            {pageInfo.hasNextPage ? (
              <Link
                href={`/post-page/${currentPageNumber + 1}`}
                className="btn-outline font-t text-xs font-bold tracking-sm"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </Link>
            ) : (
              <Link
                href={`/post-page/${currentPageNumber + 1}`}
                className="btn-outline cursor-not-allowed font-t text-xs font-bold tracking-sm opacity-50"
                onClick={(e) => e.preventDefault()}
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative flex flex-col gap-6 lg:sticky lg:top-20">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
