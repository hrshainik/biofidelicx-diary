import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedPostCard = ({ post }) => {
  const category = post.categories[0].name

  return (
    <div className="mb-8">
      <div className="relative z-10 h-40">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout="fill"
          className="w-full object-cover object-top"
        />
      </div>
      <div className="relative z-20 mx-auto flex flex-col items-center px-2 pt-0 text-midnight-500 lg:px-4">
        <div className="py-1 text-midnight-500">
          <span className="font-ct text-xs font-semibold uppercase tracking-sm">
            {category}
          </span>
        </div>
        <h1 className="mb-2 cursor-pointer text-center text-xl font-semibold leading-6 text-midnight-500 transition duration-100">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="items-center justify-center text-center lg:flex">
          <div className="mb-4 flex w-full items-center justify-center gap-2 lg:mb-0 lg:w-auto">
            {post.author.photo ? (
              <Image
                src={post.author.photo.url}
                alt={post.author.name}
                width="24"
                height="24"
                className="mr-2 rounded-full object-cover align-middle"
              />
            ) : (
              <Image src="/user.svg" alt="user" width="24" height="24" />
            )}
            <p className="inline align-middle text-sm text-white-900">
              {post.author.name}
            </p>
          </div>
          {/* <div className="font-medium">
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
        </div> */}
        </div>
        {/* <p className="text-gray-700 text-center text-lg font-normal">
        {post.excerpt}
      </p> */}
      </div>
    </div>
  )
}

export default FeaturedPostCard
