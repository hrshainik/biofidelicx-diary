import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((data) => setCategories(data))
  }, [])

  return (
    <fieldset className="border border-midnight-100">
      <legend className="mx-auto px-3 font-h text-3xl font-bold">
        Categories
      </legend>
      <div className="p-5 pt-4 lg:p-8">
        {categories.map((category) => (
          <Link href={`/category/${category.slug}`} key={category.slug}>
            <span className="mb-4 block cursor-pointer last:mb-0">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </fieldset>
  )
}

export default Categories
