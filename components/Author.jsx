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
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v3.765zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002.002-1.412 7.778-7.778z"
            fill="currentColor"
          />
        </svg>
        <span className="text-sm font-semibold">
          {moment(date).format('MMM DD, YYYY')}
        </span>
      </div>
    </div>
  )
}

export default Author
