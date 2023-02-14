import Image from 'next/image'
import Link from 'next/link'

const FeaturedPostCard = ({ post }) => {
  const category = post.categories[0].name
  const color = post.categories[0].categoryColor.hex

  return (
    <Link href={`/post/${post.slug}`}>
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
            <span
              className="font-t text-xs font-bold uppercase tracking-sm"
              style={{ color: `${color}` }}
            >
              {category}
            </span>
          </div>
          <h1 className="mb-2 cursor-pointer text-center font-h text-xl font-semibold leading-6 text-midnight-500">
            {post.title}
          </h1>
          <div className="items-center justify-center text-center lg:flex">
            <div className="mb-4 flex w-full items-center justify-center gap-2 text-midnight-400 lg:mb-0 lg:w-auto">
              {post.author.photo ? (
                <Image
                  src={post.author.photo.url}
                  alt={post.author.name}
                  width="24"
                  height="24"
                  className="mr-2 rounded-full object-cover align-middle"
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
              )}
              <p className="inline align-middle text-sm">{post.author.name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedPostCard
