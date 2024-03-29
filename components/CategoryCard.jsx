import Image from 'next/image'
import Link from 'next/link'

const CategoryCard = ({ category, height }) => {
  return (
    <Link
      key={category.name}
      href={`/category/${category.slug}`}
      className="aspect-ratio-container aspect-ratio-5-1 aspect-ratio-container-video-narrowest"
    >
      <div className=" aspect-ratio-content !overflow-visible">
        <div
          className={`relative ml-2 mt-2 flex h-full cursor-pointer flex-col justify-end border-2 border-midnight-500 bg-gradient-to-t from-midnight-900 to-transparent p-3 pb-2 text-white-500 before:absolute before:right-[2px] before:bottom-[2px] before:-left-[6px] before:-top-[6px] before:-z-10 before:border-2 before:border-midnight-500 before:bg-white-500 after:absolute after:right-2 after:bottom-2 after:-left-[10px] after:-top-[10px] after:-z-20 after:border-2 after:border-midnight-500 after:bg-white-500`}
          // style={{
          //   background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), transparent), url(${category?.photo?.url}) center center / cover no-repeat`,
          // }}
        >
          <Image
            src={category?.photo?.url}
            className="-z-10 object-cover object-center"
            alt={category.name}
            fill
            // loader={() => category?.photo?.url}
          />
          <span className="text-base">
            {category.post.length} {category.post.length > 1 ? 'blogs' : 'blog'}
          </span>
          <h2 className="mb-2 font-h text-2xl font-bold">{category.name}</h2>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
