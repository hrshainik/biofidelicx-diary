import { useEffect, useState } from 'react'
import { getCategories } from '../services'
import CategoryCard from './CategoryCard'
import CategoryCardSkeleton from './CategoryCardSkeleton'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getCategories().then((data) => setCategories(data))

    if (categories) {
      setTimeout(() => {
        setDataLoaded(true)
      }, 1500)
    }
  }, [])

  if (!dataLoaded) {
    return (
      <fieldset className="border border-midnight-100">
        <legend className="mx-auto px-3 font-h text-3xl font-bold">
          Categories
        </legend>
        <div className="flex flex-col gap-5 p-5 pt-4 lg:p-8">
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
        </div>
      </fieldset>
    )
  }

  return (
    <fieldset className="border border-midnight-100">
      <legend className="mx-auto px-3 font-h text-3xl font-bold">
        Categories
      </legend>
      <div className="flex flex-col gap-5 p-5 pt-4 lg:p-8">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.name} height="h-24" />
        ))}
      </div>
    </fieldset>
  )
}

export default Categories
