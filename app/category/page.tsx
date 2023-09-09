'use client'
import React, { useEffect, useState } from 'react'
import { CategoryCard, Header } from '../../components'
import PostWidget from '../../components/PostWidget'
import { getCategories } from '../../services'
import { Category } from '../global-types'

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<[Category]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesDetails = await getCategories()
        setCategories(categoriesDetails)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Header
        title="Categories"
        subText={`${categories.length} category`}
        imageUrl={'/hero-img.jpg'}
      />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow -z-40"></div>
          <div className="container -z-40 mx-auto grid grid-cols-1 gap-12 py-1 px-0 sm:p-0 md:p-5 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 content-start gap-6 md:grid-cols-2 lg:col-span-8">
              {categories.map((category) => (
                <CategoryCard category={category} key={category.slug} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky lg:top-20">
                <PostWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CategoriesPage
