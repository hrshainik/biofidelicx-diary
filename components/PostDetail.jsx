import { RichText } from '@graphcms/rich-text-react-renderer'

const PostDetail = ({ post }) => {
  return (
    <div className="mb-12">
      <div className="relative">
        <div className="social-wrapper flex justify-center md:float-left md:flex-none">
          <div className="social mb-4 flex md:mr-6 md:flex-col">
            <div className="fb block cursor-pointer border border-r-0 border-midnight-200 p-4 md:border-b-0 md:border-r">
              <div
                data-href={`https://biofidelicx-diary.vercel.app/post/${post.slug}`}
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
                    className="h-6 w-6 fill-midnight-300 md:h-10 md:w-10"
                  >
                    <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="tw block cursor-pointer border border-r-0 border-midnight-200 p-4 md:border-b-0 md:border-r">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURI(
                  post.title
                )}&url=${encodeURI(
                  `https://biofidelicx-diary.vercel.app/post/${post.slug}`
                )}&hashtags=biofidelicx,biofidelicxdiary&via=biofidelicx`}
                data-text={post.title}
                data-url={`https://biofidelicx-diary.vercel.app/post/${post.slug}`}
                data-hashtags="biofidelicx,biofidelicxdiary"
                data-via="biofidelicx"
                data-related="twitterapi,twitter"
                data-lang="en"
                target="_blank"
              >
                <svg
                  className="h-6 w-6 fill-midnight-300 md:h-10 md:w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                </svg>
              </a>
            </div>
            <div className="ln cursor-pointer border border-midnight-200 p-4">
              <a
                href={`https://linkedin.com/shareArticle?url=https://biofidelicx-diary.vercel.app/post/${post.slug}&title=${post.title}`}
                target="_blank"
              >
                <svg
                  className="h-6 w-6 fill-midnight-300 md:h-10 md:w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
                </svg>
              </a>
            </div>
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
