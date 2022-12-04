import parse from 'html-react-parser'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [])

  return (
    <>
      {comments.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-6 border-b border-midnight-200 pb-2 font-h text-xl font-semibold">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="mb-4 border-b border-midnight-100 pb-4 last:border-none"
            >
              <p className="mb-2 flex items-center gap-2 text-sm italic text-midnight-400">
                <span className="font-h text-base font-normal capitalize text-midnight-500">
                  {comment.name}
                </span>
                <span className="dot"></span>
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="w-full whitespace-pre-line text-midnight-500">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
