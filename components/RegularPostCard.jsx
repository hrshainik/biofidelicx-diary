import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const RegularPostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="card mb-8 cursor-pointer">
        <div className="relative z-10 h-56">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout="fill"
            className="card-img h-full w-full object-cover"
            loading="lazy"
          />
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
            <span className="font-t text-xs font-semibold uppercase leading-3 tracking-md">
              {post.categories[0].name}
            </span>
          </div>
          <div className="card-con-text p-4 pb-5 pt-0">
            <h1 className="mb-3 text-center font-h text-2xl font-semibold transition duration-100">
              {post.title}
            </h1>
            <div className="mb-4 flex w-full items-center justify-center gap-3 text-center text-sm text-midnight-400">
              <div className="flex items-center justify-center lg:mb-0 lg:w-auto">
                {post.author.photo ? (
                  <Image
                    src={post.author.photo.url}
                    alt={post.author.name}
                    width="24"
                    height="24"
                    className="rounded-full object-cover align-middle"
                  />
                ) : (
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="user"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                  </svg>
                )}
                <p className="ml-2 inline align-middle">
                  {post.author.name.split(' ')[0]}
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="calendar"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                </svg>
                <span className="ml-2">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
              </div>
            </div>
            <p className="text-center text-base font-normal leading-6 text-midnight-500">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RegularPostCard
