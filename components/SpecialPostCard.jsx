import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SpecialPostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="order-first col-span-1 mb-8 cursor-pointer md:col-span-2">
        <div className="relative h-56 md:h-96">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout="fill"
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-3 flex flex-col items-center justify-center border-4 border-white-500 p-4 text-white-500 md:inset-5 lg:inset-7">
            <span className="uppercase">{post.categories[0].name}</span>
            <h1 className="h1 text-center">{post.title}</h1>
          </div>
        </div>
        <div className="relative bg-aquamarine-400 p-4 pb-8">
          <div className="folded-corner"></div>
          <div className="flex flex-col items-start gap-2  md:flex-row md:gap-8">
            <div className="order-last block flex-col items-center justify-center text-center md:order-first md:basis-56">
              <div className="flex items-center lg:mb-0 lg:w-auto">
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
                <p className="text-gray-700 ml-2 align-middle text-lg">
                  {post.author.name}
                </p>
              </div>
              <div className="text-gray-700 flex items-center font-medium">
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
            <p className="">{post.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SpecialPostCard
