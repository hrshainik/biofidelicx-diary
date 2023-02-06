import Image from 'next/image'
import Link from 'next/link'

const Header = ({ title, imageUrl, slug, subText, color }) => {
  const bgImage = {
    background: `linear-gradient(
      rgba(0, 0, 0, .75), 
      rgba(0, 0, 0, .5)
    ),
    url('${imageUrl}') center center / cover no-repeat`,
  }

  return (
    <>
      <main className="hero bg-gradient-to-b from-midnight-500 to-transparent">
        <Image
          className="-z-10"
          src={imageUrl}
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="relative top-3 z-10 mx-auto cursor-pointer">
          <div className="relative flex h-12 items-center justify-center md:h-16 lg:h-20">
            <Link href="/">
              <Image src="/logo.svg" layout="fill" alt="logo" />
            </Link>
          </div>
        </div>
        <div className="hero-l">
          <h1 className="main-title">{title}</h1>
          {subText && slug && color && (
            <Link href={`/category/[cSlug]`} as={`/category/${slug}`}>
              <div className="flex items-center gap-1">
                <div
                  className="h-px w-12 bg-aquamarine-500 sm:w-20 md:w-32 lg:w-36"
                  style={{ backgroundColor: `${color}` }}
                ></div>
                <span
                  className="post-tag cursor-pointer"
                  style={{
                    backgroundColor: `${color}`,
                  }}
                >
                  {subText}
                </span>
                <div
                  className="h-px w-12 bg-aquamarine-500 sm:w-20 md:w-32 lg:w-36"
                  style={{ backgroundColor: `${color}` }}
                ></div>
              </div>
            </Link>
          )}

          {subText && color && !slug && (
            <div className="flex items-center gap-1">
              <div
                className="h-px w-12 bg-aquamarine-500 sm:w-20 md:w-32 lg:w-36"
                style={{ backgroundColor: `${color}` }}
              ></div>
              <span
                className="post-tag"
                style={{
                  backgroundColor: `${color}`,
                }}
              >
                {subText}
              </span>
              <div
                className="h-px w-12 bg-aquamarine-500 sm:w-20 md:w-32 lg:w-36"
                style={{ backgroundColor: `${color}` }}
              ></div>
            </div>
          )}

          {subText && !color && !slug && (
            <div className="flex items-center gap-1">
              <div className="h-px w-12 bg-aquamarine-500 sm:w-20 md:w-32 lg:w-36"></div>
              <span className="post-tag">{subText}</span>
              <div className="h-px w-12 bg-aquamarine-500 sm:w-20 md:w-32 lg:w-36"></div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default Header
