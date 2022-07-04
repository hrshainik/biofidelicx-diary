import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getRecentPosts, getRelatedPosts } from '../services'

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
      <fieldset className="border border-midnight-100">
        <legend className="mx-auto px-3 font-h text-3xl font-bold">
          {slug ? 'Related Posts' : 'Recent Posts'}
        </legend>
        <div className="p-5 pt-4 lg:p-8">
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
              <div className="ml-2 flex-grow sm:ml-4">
                <p className="text-sm text-white-900">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </p>
                <Link
                  href={`/post/${post.slug}`}
                  className="text-base"
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
