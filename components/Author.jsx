import moment from 'moment'
import Image from 'next/image'
import React from 'react'

const Author = ({ author, date }) => {
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-center gap-3">
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
            <Image src="/user.svg" alt="user" width="90" height="90" />
          )}
        </div>
        <div>
          <span className="font-h text-sm font-light italic text-midnight-300">
            Written By
          </span>
          <h3 className="text-2xl font-semibold">{author.name}</h3>
          <p className="font-ct text-base">{author.bio}</p>
        </div>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-pink-500 mr-2 inline h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>{moment(date).format('MMM DD, YYYY')}</span>
      </div>
    </div>
  )
}

export default Author
