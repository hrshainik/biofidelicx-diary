'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Header, Loader } from '../../../components'
import AuthorAbout from '../../../components/AuthorAbout'
import RegularPostCard from '../../../components/RegularPostCard'
import { getAuthorDetails } from '../../../services'
import { Author } from '../../global-types'

const AuthorPage: React.FC = ({ params }: { params: { slug: string } }) => {
  const router = useRouter()

  const [author, setAuthor] = useState<Author>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorDetails = await getAuthorDetails(params.slug)
        setAuthor(authorDetails)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [params.slug])

  if (router.isFallback) {
    return <Loader />
  }

  if (!author) {
    return <Loader />
  }

  return (
    <>
      <Header
        title={author.name}
        imageUrl={author?.cover?.url}
        subText={`${author.post.length} articles`}
        authorPhoto={author.photo.url}
      />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="container -z-40 mx-auto grid grid-cols-1 gap-12 py-1 px-0 sm:p-0 md:p-5 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 content-start gap-6 md:grid-cols-2 lg:col-span-8">
              {author.post.map((post, i) => (
                <RegularPostCard key={i} post={post} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky lg:top-20">
                <AuthorAbout author={author} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorPage
