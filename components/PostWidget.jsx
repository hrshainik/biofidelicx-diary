import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getRelatedPosts } from '../services'
import Image from 'next/image'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getRelatedPosts(categories, slug).then((data) => setRelatedPosts(data))
    } else {
      getRecentPosts().then((data) => setRelatedPosts(data))
    }
  }, [slug])

  return (
    <>
      <fieldset className="border border-aquamarine-500">
        <legend className="mx-auto px-3 text-2xl">
          {slug ? 'Related Posts' : 'Recent Posts'}
        </legend>
        <div className="p-8 pt-4">
          {relatedPosts.map((post) => (
            <div
              className="mb-4 flex w-full items-start last:mb-0"
              key={post.title}
            >
              <div className="w-16 flex-none">
                <Image
                  width="60"
                  height="60"
                  src={post.featuredImage.url}
                  className="object-cover align-middle"
                  alt={post.title}
                />
              </div>
              <div className="ml-4 flex-grow">
                <p className="font-xs text-gray-500">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </p>
                <Link
                  href={`/post/${post.slug}`}
                  className="text-md"
                  key={post.title}
                >
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </>
  )
}

export default PostWidget
