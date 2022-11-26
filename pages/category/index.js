import Head from 'next/head'
import Link from 'next/link'
import { Header, PostWidget } from '../../components'
import { getCategories } from '../../services'

const CategoryPost = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Category</title>
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
      <Header title="Categories" />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="z-50 grid grid-cols-1 gap-12 bg-white-500 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
              {categories.map((category) => (
                <Link key={category.name} href={`/category/${category.slug}`}>
                  <h1>{category.name}</h1>
                </Link>
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
export default CategoryPost

export async function getStaticProps() {
  const categories = await getCategories()

  return {
    props: { categories },
  }
}
