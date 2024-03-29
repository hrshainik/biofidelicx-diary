'use client'
import { RichText } from '@graphcms/rich-text-react-renderer'
import React, { useEffect, useState } from 'react'

interface PostDetailProps {
  post: {
    title: string
    slug: string
    featuredImage: {
      url: string
    }
    content: {
      raw: {
        children: any
      }
    }
    excerpt: string
  }
}

const PostDetail: React.FC = ({ post }: PostDetailProps) => {
  const [webShareSupported, setWebShareSupported] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.navigator.share) {
      setWebShareSupported(true)
    }
  }, [])

  const shareBlogPost = async () => {
    if (webShareSupported) {
      try {
        await window.navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.error('Error sharing:', error)
      }
    }
  }

  return (
    <div className="mb-12">
      <div className="relative">
        <div className="social-wrapper flex justify-center md:float-left md:flex-none">
          <div className="social mb-0 flex text-midnight-300 md:mb-4 md:mr-6 md:flex-col">
            <div className="fb block cursor-pointer border border-r-0 border-midnight-200 p-4 md:border-b-0 md:border-r">
              <div
                data-href={`https://biofidelicx-diary.vercel.app/${post.slug}`}
                data-layout="button"
                data-size="large"
              >
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbiofidelicx-diary.vercel.app%2Fpost%2F${post.slug}&amp;src=sdkpreparse`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 md:h-10 md:w-10"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="tw block cursor-pointer border border-r-0 border-midnight-200 p-4 md:border-b-0 md:border-r">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURI(
                  post.title
                )}&url=${encodeURI(
                  `https://biofidelicx-diary.vercel.app/${post.slug}`
                )}&hashtags=biofidelicx,biofidelicxdiary&via=biofidelicx`}
                data-text={post.title}
                data-url={`https://biofidelicx-diary.vercel.app/${post.slug}`}
                data-hashtags="biofidelicx,biofidelicxdiary"
                data-via="biofidelicx"
                data-related="twitterapi,twitter"
                data-lang="en"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 md:h-10 md:w-10"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <div
              className={`ln cursor-pointer border border-midnight-200 p-4 md:border-b-0 md:border-r ${
                webShareSupported
                  ? 'border-r-0 md:border-b-0'
                  : 'border-r md:border-b'
              }`}
            >
              <a
                href={`https://linkedin.com/shareArticle?url=https://biofidelicx-diary.vercel.app/${post.slug}&title=${post.title}`}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 md:h-10 md:w-10"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            {webShareSupported && (
              <div
                onClick={shareBlogPost}
                className="share cursor-pointer border border-midnight-200 p-4"
              >
                <a
                  href={`https://linkedin.com/shareArticle?url=https://biofidelicx-diary.vercel.app/${post.slug}&title=${post.title}`}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 30 30"
                    className="h-6 w-6 md:h-10 md:w-10"
                    fill="currentColor"
                  >
                    <path d="M 23 3 C 20.791 3 19 4.791 19 7 C 19 7.2869826 19.034351 7.5660754 19.091797 7.8359375 L 10 12.380859 C 9.2667379 11.541629 8.2018825 11 7 11 C 4.791 11 3 12.791 3 15 C 3 17.209 4.791 19 7 19 C 8.2018825 19 9.2667379 18.458371 10 17.619141 L 19.091797 22.164062 C 19.034351 22.433925 19 22.713017 19 23 C 19 25.209 20.791 27 23 27 C 25.209 27 27 25.209 27 23 C 27 20.791 25.209 19 23 19 C 21.798117 19 20.733262 19.541629 20 20.380859 L 10.908203 15.835938 C 10.965649 15.566075 11 15.286983 11 15 C 11 14.713017 10.965649 14.433925 10.908203 14.164062 L 20 9.6191406 C 20.733262 10.458371 21.798117 11 23 11 C 25.209 11 27 9.209 27 7 C 27 4.791 25.209 3 23 3 z"></path>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="post-content">
          <RichText content={post.content.raw.children} />
        </div>
      </div>
    </div>
  )
}

export default PostDetail
