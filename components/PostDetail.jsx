import React from 'react'
import moment from 'moment'
import Image from 'next/image'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-one':
        return (
          <h1 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h1>
        )
      case 'heading-two':
        return (
          <h2 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        )
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'heading-five':
        return (
          <h5 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h5>
        )
      case 'heading-six':
        return (
          <h6 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h6>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )

      default:
        return modifiedText
    }
  }

  return (
    <div className="mb-8 pb-12">
      <div className="px-4 lg:px-0">
        {post.content.raw.children.map((typeObj, i) => {
          const children = typeObj.children.map((item, itemI) =>
            getContentFragment(itemI, item.text, item)
          )

          return getContentFragment(i, children, typeObj, typeObj.type)
        })}
        <div className="mb-8 flex w-full items-center">
          <div className="mb-4 mr-8 flex w-full items-center lg:mb-0 lg:w-auto">
            {post.author.photo ? (
              <Image
                src={post.author.photo.url}
                alt={post.author.name}
                width="30"
                height="30"
                className="rounded-full object-cover align-middle"
              />
            ) : (
              <p>No Photo</p>
            )}
            <p className="text-gray-700 ml-2 inline align-middle text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="text-gray-700 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-500 mr-2 inline h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
