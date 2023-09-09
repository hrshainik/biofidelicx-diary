'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Comments, CommentsForm, Header, Loader } from '../../components'
import Author from '../../components/Author'
import Categories from '../../components/Categories'
import PostDetail from '../../components/PostDetail'
import PostWidget from '../../components/PostWidget'
import { getPostDetails } from '../../services'
import { Post } from '../global-types'

const PostDetailsPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter()

  const [post, setPost] = useState<Post>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postDetails = await getPostDetails(params.slug)
        setPost(postDetails)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
    console.log('fetching data')
  }, [params.slug])

  if (router.isFallback) {
    return <Loader />
  }

  if (!post) {
    return <Loader />
  }

  return (
    <>
      <Header
        title={post.title}
        imageUrl={post.featuredImage.url}
        subText={post.categories[0].name}
        slug={post.categories[0].slug}
        color={post.categories[0].categoryColor?.hex}
      />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div
          className="post-details"
          style={{
            borderTop: `3px solid ${post.categories[0].categoryColor?.hex}`,
          }}
        >
          <div className="post-shadow !top-[calc(4rem_-_3px)]"></div>
          <div className="container -z-40 mx-auto grid grid-cols-1 gap-12 p-0 sm:p-0 md:p-5 lg:grid-cols-12">
            <div className="col-span-1 content-start lg:col-span-8">
              <PostDetail post={post} />
              <Author author={post.author} date={post.createdAt} />
              <CommentsForm slug={post.slug} />
              <Comments slug={post.slug} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative flex flex-col gap-6 self-start lg:sticky lg:top-20">
                <PostWidget
                  slug={post.slug}
                  categories={post.categories.map((category) => category.slug)}
                />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetailsPage
