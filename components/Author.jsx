import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="bg-black relative mt-20 mb-8 rounded-lg bg-opacity-20 p-12 text-center">
      <div className="absolute left-0 right-0 -top-14">
        {author.photo ? (
          <Image
            src={author.photo.url}
            alt={author.name}
            width="90"
            height="90"
            className="rounded-full object-cover align-middle"
            loading="lazy"
          />
        ) : (
          <p>No Photo</p>
        )}
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  )
}

export default Author
