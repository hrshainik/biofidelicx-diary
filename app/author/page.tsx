'use client'
import React, { useEffect, useState } from 'react'
import { Categories, Header, PostWidget } from '../../components'
import AuthorCard from '../../components/AuthorCard'
import { getAuthors } from '../../services'

const AuthorsPage: React.FC = () => {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorsDetails = await getAuthors()
        setAuthors(authorsDetails)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Header
        title="Authors"
        subText={`${authors.length} author`}
        imageUrl={'/hero-img.jpg'}
      />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="container -z-40 mx-auto grid grid-cols-1 gap-12 py-1 px-0 sm:p-0 md:p-5 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 content-start gap-6 md:grid-cols-2 lg:col-span-8">
              {authors.map(({ node: author }) => (
                <AuthorCard author={author} key={author.slug} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative flex flex-col gap-6 lg:sticky lg:top-20">
                <PostWidget />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorsPage
