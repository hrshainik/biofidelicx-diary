import { useEffect, useState } from 'react'
import { submitComment } from '../services'
import Checkbox from './Checkbox'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMsg, setShowSuccessMsg] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    storeData: false,
  })

  useEffect(() => {
    setLocalStorage(window.localStorage)
    const initalFormData = {
      name: window.localStorage.getItem('name') || '',
      email: window.localStorage.getItem('email') || '',
      storeData:
        window.localStorage.getItem('name') ||
        window.localStorage.getItem('email') ||
        false,
    }
    console.log(initalFormData)
    setFormData(initalFormData)
  }, [])

  const onInputChange = (e) => {
    const { target } = e
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }))
    }
  }

  const handleCommentSubmission = () => {
    setError(false)

    const { name, email, comment, storeData } = formData

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    } else {
      localStorage.removeItem('name', name)
      localStorage.removeItem('email', email)
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMsg(true)

      setTimeout(() => {
        setShowSuccessMsg(false)
      }, 3000)
    })
  }

  return (
    <div className="my-8">
      <h3 className="mb-6 border-b border-midnight-200 pb-2 font-h text-xl font-semibold">
        Leave a Reply
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          name="comment"
          className="w-full rounded-none border border-midnight-100 p-4 outline-none"
          placeholder="Comment"
          value={formData.comment || ''}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          value={formData.name || ''}
          onChange={onInputChange}
          className="w-full rounded-none border border-midnight-100 p-4 py-2 px-4 outline-none"
          placeholder="Name"
          name="name"
          required
        />
        <input
          type="text"
          value={formData.email || ''}
          onChange={onInputChange}
          className="w-full rounded-none border border-midnight-100 p-4 py-2 px-4 outline-none"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div className="mb-2 grid grid-cols-1 gap-4">
        <div className="flex items-center">
          <Checkbox
            value={formData.storeData}
            isCheckboxSelected={formData.storeData}
            handleCheckbox={onInputChange}
            text="Save my email for the next time I comment"
            name="storeData"
          />
        </div>
      </div>
      {error && (
        <p className="text-sm text-rose-600">All fields are required.</p>
      )}
      <div className="btn-noti">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="btn-outline px-3.5 py-2 font-t text-xs font-bold uppercase tracking-sm"
        >
          Post Comment
        </button>
        {showSuccessMsg && (
          <span className="bg-aquamarine-500 px-3.5 py-2 text-center font-t text-sm font-normal opacity-0 transition-opacity duration-300 ease-in-out">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
