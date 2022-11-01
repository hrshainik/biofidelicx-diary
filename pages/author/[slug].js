import Head from 'next/head'
import { useRouter } from 'next/router'
import { AuthorAbout, Header, Loader, RegularPostCard } from '../../components'
import { getAuthorDetails, getAuthors } from '../../services'

const AuthorDetails = ({ author }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <>
      <Head>
        <title>{author.name} - biofidelicX diary</title>
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
      <Header
        title={author.name}
        imageUrl={author?.cover?.url}
        totalItems={author.post.length}
      />
      <div className="mx-auto mb-8 px-2">
        <div className="post-details">
          <div className="post-shadow"></div>
          <div className="z-50 grid grid-cols-1 gap-12 bg-white-500 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
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

export default AuthorDetails

export async function getStaticProps({ params }) {
  const authorDetails = await getAuthorDetails(params.slug)

  return {
    props: { author: authorDetails },
  }
}

export async function getStaticPaths() {
  const authors = await getAuthors()

  return {
    paths: authors.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
