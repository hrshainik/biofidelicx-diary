import Head from 'next/head'
import Image from 'next/image'
import { PostCard, PostWidget, Categories, Header } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>biofidelicX diary</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Here you find bio-science related blogs."
        />
        <meta
          name="keywords"
          content="biofidelicx diary, biofidelicx academy"
        />
        <meta name="author" content="Habibur Rahman" />
      </Head>
      <Header title="Main Header" imageUrl={'/hero-img.jpg'} />
      <FeaturedPosts />
      <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
          {posts.map((post, i) => (
            <PostCard post={post.node} key={i} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
