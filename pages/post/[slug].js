import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  Author,
  Comments,
  CommentsForm,
  Header,
  Loader,
  PostDetail,
  PostWidget,
} from '../../components'
import { getPostDetails, getPosts } from '../../services'

const PostDetails = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }
  return (
    <>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0"
        nonce="bcVR7zAR"
      ></script>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content="biofidelicX diary, biofidelicX academy"
        />
        <meta name="author" content={post.author.name} />
        // For facebook
        <meta
          property="og:url"
          content={`https://biofidelicx-diary.vercel.app/post/${post.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage.url} />
      </Head>
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
          <div className="post-shadow"></div>
          <div className="z-50 grid grid-cols-1 gap-12 bg-white-500 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-8">
              <PostDetail post={post} />
              <Author author={post.author} date={post.createdAt} />
              <CommentsForm slug={post.slug} />
              <Comments slug={post.slug} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky lg:top-20">
                <PostWidget
                  slug={post.slug}
                  categories={post.categories.map((category) => category.slug)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const postDetails = await getPostDetails(params.slug)

  if (!postDetails) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: postDetails },
  }
}

export async function getStaticPaths() {
  const limit = 10
  const offset = 0
  const { edges: posts } = await getPosts(limit, offset)

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}
