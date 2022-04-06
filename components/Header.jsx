import React, { useContext } from 'react'
import Link from 'next/link'

const categories = [
  { name: 'genetics', slug: 'genetics' },
  { name: 'biostatistics', slug: 'biostatistics' },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold">
              biofidelicX diary
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="font-semibol mt-2 ml-4 cursor-pointer align-middle md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
