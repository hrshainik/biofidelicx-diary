import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import Image from 'next/image'

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
              <Image
                src="/logo.svg"
                alt="logo"
                width="250"
                height="75"
                className="cursor-pointer"
              />
            </Link>
            {/* <div className="">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="font-semibol mt-2 ml-4 cursor-pointer align-middle md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div> */}
          </div>
        </div>
        <div
          style={{ height: '60vh' }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="h1 w-11/12 py-8 text-center text-white-500">
            {title}
          </h1>
          {category && (
            <Link href={`/category/${slug}`}>
              <span className="cursor-pointer bg-aquamarine-500 px-3 py-2 text-midnight-500">
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
