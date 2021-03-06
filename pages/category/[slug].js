import Head from 'next/head'
import { useRouter } from 'next/router'
import { Categories, Header, Loader, RegularPostCard } from '../../components'
import { getCategories, getCategoryPost } from '../../services'

const CategoryPost = ({ posts }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  const category = posts[0].node.categories[0].name

  return (
    <>
      <Head>
        <title>{category}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="biofidelicx diary" />
        <meta
          name="keywords"
          content="biofidelicX diary, biofidelicX academy"
        />
        <meta name="author" content="Habibur Rahman" />
      </Head>
      <Header title={category} />
      <div className="mx-auto mb-8 px-2">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="z-50 grid grid-cols-1 gap-12 bg-white-500 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
              {posts.map((post, index) => (
                <RegularPostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky lg:top-20">
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CategoryPost

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)

  return {
    props: { posts },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
