'use client'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SpecialPostCardProps {
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

const SpecialPostCard: React.FC = ({ post }: SpecialPostCardProps) => {
  return (
    <Link
      href={`/${post.slug}`}
      className="sp-card order-first col-span-1 cursor-pointer md:col-span-2"
    >
      <div className="sp-card-up aspect-ratio-container aspect-ratio-19-9 aspect-ratio-container-video-narrow relative z-10 w-full overflow-hidden">
        <div className="aspect-ratio-content">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            fill
            className="f-img object-cover object-top"
            // loader={() => post.featuredImage.url}
          />

          <div className="sp-card-title">
            <span>{post.categories[0].name}</span>
            <h1 className="text-center font-h text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="relative bg-aquamarine-400 p-4 pb-8">
        <div className="folded-corner"></div>
        <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
          <div className="order-last block flex-col items-center justify-center text-midnight-400 md:order-first md:basis-60">
            <div className="mb-2 lg:w-auto">
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
              <p className="align-middle text-sm">
                By {post.author.name.split(' ')[0]}
              </p>
            </div>
            <p className="">3 mins</p>
            <div className="text-sm">
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
              <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <p className="pr-6 text-base leading-6">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  )
}

export default SpecialPostCard
