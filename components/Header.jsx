import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Header = ({ title, imageUrl, category, slug, totalItems }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((data) => setCategories(data))
  }, [])

  const bgImage = {
    background: `linear-gradient(
      rgba(0, 0, 0, .75), 
      rgba(0, 0, 0, .5)
    ),
    url('${imageUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPostion: 'center',
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
        <div
          style={{ height: '40vh' }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="main-title">{title}</h1>
          {category && (
            <Link href={`/category/${slug}`}>
              <span className="post-tag cursor-pointer">{category}</span>
            </Link>
          )}
          {totalItems && (
            <span className="post-tag">{totalItems} articles</span>
          )}
        </div>
      </main>
    </>
  )
}

export default Header
