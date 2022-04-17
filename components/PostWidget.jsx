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
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div className="item-center mb-4 flex w-full" key={post.title}>
          <div className="w-16 flex-none">
            <img
              width="60px"
              height="60px"
              src={post.featuredImage.url}
              className="h-16 w-16 rounded-full object-cover align-middle"
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
  )
}

export default PostWidget
