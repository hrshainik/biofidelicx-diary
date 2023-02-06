import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const Author = ({ author, date }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
      <Link href={`/author/${author.slug}`}>
        <div className="flex cursor-pointer items-center gap-3">
          <div className="">
            {author.photo ? (
              <Image
                src={author.photo.url}
                alt={author.name}
                width="90"
                height="90"
                className="object-cover align-middle"
                loading="lazy"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="90"
                height="90"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>
          <div>
            <span className="font-h text-sm font-light italic text-midnight-300">
              Written By
            </span>
            <h3 className="font-h text-2xl font-semibold">{author.name}</h3>
            <p className="text-sm">{author.bio?.slice(0, 45)}...</p>
          </div>
        </div>
      </Link>
      <div className="flex basis-0 items-end gap-2 text-midnight-300 md:basis-56 md:justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" />
        </svg>
        <span className="text-sm font-semibold">
          {moment(date).format('MMM DD, YYYY')}
        </span>
      </div>
    </div>
  )
}

export default Author
