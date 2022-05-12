import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RegularPostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="mb-8 cursor-pointer">
        <div className="relative z-10 h-56">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout="fill"
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div
          className="relative z-20 mx-auto -mt-6 flex flex-col items-center bg-white-500 p-6 pt-0 text-midnight-500"
          style={{ width: '95%' }}
        >
          <div className="-mt-4 bg-aquamarine-500/80 py-2 px-3">
            <span className="uppercase">{post.categories[0].name}</span>
          </div>
          <h1 className="text-center text-3xl font-semibold transition duration-100">
            {post.title}
          </h1>
          <div className="block w-full items-center justify-center text-center lg:flex">
            <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
              {post.author.photo ? (
                <Image
                  src={post.author.photo.url}
                  alt={post.author.name}
                  width="30"
                  height="30"
                  className="rounded-full object-cover align-middle"
                />
              ) : (
                <Image src="/user.svg" alt="user" width="30" height="30" />
              )}
              <p className="text-gray-700 ml-2 inline align-middle text-lg">
                {post.author.name}
              </p>
            </div>
            <div className="text-gray-700 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-pink-500 mr-2 inline h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <p className="text-gray-700 text-center text-lg font-normal">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default RegularPostCard
