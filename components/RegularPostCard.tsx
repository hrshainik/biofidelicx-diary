'use client'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface RegularPostCardProps {
  post: {
    title: string
    slug: string
    featuredImage: {
      sourceUrl: string
    }
    author: {
      id: string
      name: string
      bio: string
      photo: {
        url: string
      }
    }
    categories: [
      {
        name: string
        slug: string
        categoryColor: {
          hex: string
        }
        photo: {
          url: string
        }
      }
    ]
    excerpt: string
    createdAt: string
    specialPost: boolean
  }
}

const RegularPostCard: React.FC = ({ post }: RegularPostCardProps) => {
  return (
    <Link href={`/${post.slug}`}>
      <div className="card cursor-pointer">
        <div className="aspect-ratio-container aspect-ratio-16-9 aspect-ratio-container-video relative z-10 w-full overflow-hidden">
          <div className="aspect-ratio-content">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              fill
              className="card-img object-cover"
              // loader={() => post.featuredImage.url}
            />
          </div>
        </div>
        <div
          className="card-con relative z-20 mx-auto -mt-6 flex flex-col items-center bg-white-500  text-midnight-500"
          style={{ width: '95%' }}
        >
          <div className="shadow-box"></div>
          <div
            className="-mt-4 flex items-center justify-center py-2 px-3.5"
            style={{
              backgroundColor: `${post.categories[0].categoryColor?.hex}`,
            }}
          >
            <span className="font-t text-xs font-semibold uppercase leading-3 tracking-md text-white-500">
              {post.categories[0].name}
            </span>
          </div>
          <div className="card-con-text w-full p-4 pb-5 pt-0">
            <h2 className="mb-3 text-center font-h text-2xl font-semibold transition duration-100">
              {post.title}
            </h2>
            <div className="mb-4 flex w-full items-center justify-center gap-3 text-center text-sm text-midnight-400">
              <div className="flex items-center justify-center lg:mb-0 lg:w-auto">
                {/* {post.author.photo ? (
                  <Image
                    src={post.author.photo.url}
                    alt={post.author.name}
                    width="24"
                    height="24"
                    className="rounded-full object-cover align-middle"
                    // loader={() => post.author.photo.url}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                      fill="currentColor"
                    />
                  </svg>
                )} */}
                <p className="ml-2 inline align-middle">
                  By {post.author.name.split(' ')[0]}
                </p>
              </div>
              <div>|</div>
              <div>
                <span>3 mins</span>
              </div>
              <div>|</div>
              <div className="flex items-center">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z"
                    fill="currentColor"
                  />
                </svg> */}
                <span className="ml-2">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
              </div>
            </div>
            <p className="text-center text-base font-normal leading-6 text-midnight-500">
              {post.excerpt}...
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RegularPostCard
