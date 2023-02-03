import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuthorCard = ({ author }) => {
  return (
    <Link key={author.slug} href={`/author/${author.slug}`}>
      <div className="relative">
        <div className="relative h-48 w-[50%] sm:h-56 md:h-44 lg:h-52 lg:w-[60%] xl:w-[50%] 2xl:h-56">
          <Image
            src={author.photo.url}
            layout="fill"
            className="h-full w-full object-cover"
            loading="lazy"
            alt="author"
          />
        </div>
        <div className="border-1 absolute top-4 right-0 w-[60%] border border-midnight-500/40 bg-white-500/60 p-3 lg:w-[50%] xl:w-[60%]">
          <h2 className="font-h text-xl sm:text-2xl">{author.name}</h2>
          <p className="text-sm">
            {author.bio?.slice(0, 45)}
            {author.bio?.length > 45 ? '...' : null}
          </p>
          <div className=""></div>
        </div>
      </div>
    </Link>
  )
}

export default AuthorCard
