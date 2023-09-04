'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Categories,
  Header,
  Loader,
  PostWidget,
  RegularPostCard,
} from '../../../components'
import { getCategoryPost } from '../../../services'

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter()

  const [posts, setPosts] = useState<any>(null)
  const [category, setCategory] = useState('')
  const [categoryColor, setCategoryColor] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsDetails = await getCategoryPost(params.slug)
        setPosts(postsDetails)
        setCategory(postsDetails[0].node.categories[0].name)
        setCategoryColor(postsDetails[0].node.categories[0].categoryColor.hex)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [params.slug])

  if (router.isFallback) {
    return <Loader />
  }

  if (!posts) {
    return <Loader />
  }

  return (
    <>
      <Header
        title={category}
        imageUrl={posts[0].node.categories[0].photo?.url}
        subText={`${posts.length} articles`}
        color={categoryColor}
      />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div
          className="post-details"
          style={{ borderTop: `3px solid ${categoryColor}` }}
        >
          <div className="post-shadow !top-[calc(4rem_-_3px)]"></div>
          <div className="container -z-40 mx-auto grid grid-cols-1 gap-12 py-1 px-0 sm:p-0 md:p-5 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 content-start gap-6 md:grid-cols-2 lg:col-span-8">
              {posts.map((post, index) => (
                <RegularPostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative flex flex-col gap-6 lg:sticky lg:top-20">
                <Categories />
                <PostWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CategoryPage
