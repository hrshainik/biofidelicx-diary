import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Header = ({ title, imageUrl, category, slug }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((data) => setCategories(data))
  }, [])

  const bgImage = {
    background: `linear-gradient(
      rgba(0, 0, 0, .75), 
      rgba(0, 0, 0, .5)
    ),
    url('${imageUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <>
      <main className="hero" style={bgImage}>
        <div className="mx-auto mb-8">
          <div className="flex h-32 items-center justify-center py-3">
            <Link href="/">
              <img src="/logo.svg" alt="logo" className="logo" />
            </Link>
          </div>
        </div>
        <div
          style={{ height: '40vh' }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="w-11/12 py-8 text-center font-h text-4xl font-bold text-white-500 sm:text-5xl md:text-7xl">
            {title}
          </h1>
          {category && (
            <Link href={`/category/${slug}`}>
              <span className="cursor-pointer bg-aquamarine-500 px-3 py-2.5 font-ct text-xs font-semibold uppercase leading-3 tracking-sm text-midnight-500">
                {category}
              </span>
            </Link>
          )}
        </div>
      </main>
    </>
  )
}

export default Header
