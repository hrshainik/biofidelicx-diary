import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SpecialPostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="sp-card order-first col-span-1 mb-8 cursor-pointer md:col-span-2">
        <div className="sp-card-up">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout="fill"
            className="f-img h-full w-full object-cover object-top"
            loading="lazy"
          />
          <div className="sp-card-title">
            <span>{post.categories[0].name}</span>
            <h1 className="text-center font-h text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
        <div className="relative bg-aquamarine-400 p-4 pb-8">
          <div className="folded-corner"></div>
          <div className="flex flex-col items-start gap-2  md:flex-row md:gap-8">
            <div className="order-last block flex-col items-center justify-center text-center md:order-first md:basis-56">
              <div className="flex items-center lg:mb-2 lg:w-auto">
                {post.author.photo ? (
                  <Image
                    src={post.author.photo.url}
                    alt={post.author.name}
                    width="30"
                    height="30"
                    className="rounded-full object-cover align-middle"
                  />
                ) : (
                  <svg
                    className="svg-icon h-6 w-6"
                    style={{
                      verticalAlign: 'middle',
                      fill: 'currentColor',
                      overflow: 'hidden',
                      color: '#757581',
                    }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 1024a510.421333 510.421333 0 0 1-371.584-160A511.850667 511.850667 0 1 1 512 1024z m309.632-160a466.965333 466.965333 0 0 0-619.264 0 467.477333 467.477333 0 0 0 619.264 0zM746.666667 469.333333a234.666667 234.666667 0 1 0-234.666667 234.666667 234.666667 234.666667 0 0 0 234.666667-234.666667zM512 42.666667A468.864 468.864 0 0 0 171.370667 834.133333a510.528 510.528 0 0 1 219.52-115.690666 277.333333 277.333333 0 1 1 242.218666 0 510.528 510.528 0 0 1 219.52 115.690666A468.864 468.864 0 0 0 512 42.666667z" />
                  </svg>
                )}
                <p
                  className="ml-2 align-middle text-sm"
                  style={{ color: 'rgb(170, 170, 177)' }}
                >
                  {post.author.name}
                </p>
              </div>
              <div
                className="flex items-center text-sm"
                style={{ color: '#757581' }}
              >
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
                <span style={{ color: 'rgba(170, 170, 177)' }}>
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
              </div>
            </div>
            <p className="pr-6 font-h text-base leading-6">{post.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SpecialPostCard
