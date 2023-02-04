import Link from 'next/link'

const Header = ({ title, imageUrl, slug, subText, color }) => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getCategories().then((data) => setCategories(data));
  // }, []);

  const bgImage = {
    background: `linear-gradient(
      rgba(0, 0, 0, .75), 
      rgba(0, 0, 0, .5)
    ),
    url('${imageUrl}') center center / cover no-repeat`,
  }

  return (
    <>
      <main className="hero" style={bgImage}>
        <div className="mx-auto mb-8">
          <div className="flex items-center justify-center py-3">
            <Link href="/">
              <img src="/logo.svg" alt="logo" className="logo" />
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
