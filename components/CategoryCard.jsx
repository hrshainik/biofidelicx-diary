import Link from 'next/link'
import React from 'react'

const CategoryCard = ({ category }) => {
  return (
    <Link key={category.name} href={`/category/${category.slug}`}>
      <div
        className="flex h-32 cursor-pointer flex-col justify-end border-4 border-midnight-500 p-3"
        style={{ backgroundImage: `url(${category.photo.url})` }}
      >
        <span className="">{category.post.length}</span>
        <h3 className="">{category.name}</h3>
      </div>
    </Link>
  )
}

export default CategoryCard
