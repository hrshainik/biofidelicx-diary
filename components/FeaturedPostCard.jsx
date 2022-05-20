import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedPostCard = ({ post }) => (
  // <div className="relative h-72">
  //   <div
  //     className="absolute inline-block h-72 w-full rounded-lg bg-cover bg-center bg-no-repeat shadow-md"
  //     style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
  //   />
  //   <div className="absolute h-72 w-full rounded-lg bg-gradient-to-b from-gray-400 via-gray-700 to-black bg-center opacity-50" />
  //   <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg p-4">
  //     <p className="text-shadow mb-4 text-xs font-semibold text-white">
  //       {moment(post.createdAt).format('MMM DD, YYYY')}
  //     </p>
  //     <p className="text-shadow mb-4 text-center text-2xl font-semibold text-white">
  //       {post.title}
  //     </p>
  //     <div className="absolute bottom-5 flex w-full items-center justify-center">
  //       <Image
  //         unoptimized
  //         alt={post.author.name}
  //         height="30px"
  //         width="30px"
  //         className="rounded-full align-middle drop-shadow-lg"
  //         src={post.author.photo.url}
  //       />
  //       <p className="text-shadow ml-2 inline align-middle font-medium text-white">
  //         {post.author.name}
  //       </p>
  //     </div>
  //   </div>
  //   <Link href={`/post/${post.slug}`}>
  //     <span className="absolute h-full w-full cursor-pointer" />
  //   </Link>
  // </div>
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
        {/* <span className="uppercase">{post.categories[0].name}</span> */}
        <span className="font-ct text-xs font-semibold uppercase tracking-sm">
          Categories
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

export default FeaturedPostCard
