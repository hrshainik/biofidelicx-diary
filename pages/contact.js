import { sendForm } from 'emailjs-com'
import Head from 'next/head'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Slide, toast } from 'react-toastify'
import { Header } from '../components'

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const USER_ID = process.env.NEXT_PUBLIC_USER_ID

const Contact = () => {
  const form = useRef()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        toast.success('Message Sent', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Slide,
        })
      },
      (error) => {
        toast.error('Some problem occured', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Slide,
        })
      }
    )
    reset()
  }
  return (
    <>
      <Head>
        <title>Contact - biofidelicX diary</title>
      </Head>
      <Header title="We'd love to hear from you" imageUrl={'/hero-img.jpg'} />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details !max-w-screen-lg">
          <div className="post-shadow"></div>
          <h2 className="title">Get In Touch</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
            ref={form}
          >
            <div>
              <label className="input relative">
                <input
                  className="input__field block w-full rounded-none border border-midnight-500 bg-transparent py-3 px-3 font-t focus:outline-0"
                  type="text"
                  placeholder=" "
                  {...register('name', {
                    required: 'Name is required',
                    pattern: {
                      value: /^[A-Za-z]+([\ A-Za-z]+)*/,
                      message: "Name doesn't contain number",
                    },
                  })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                <span className="input__label absolute left-0 top-0 my-[7px] mx-1 origin-top-left translate-x-0  translate-y-0 cursor-text whitespace-nowrap bg-white-500 py-[6px] px-3 font-h">
                  Name
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                    fill="currentColor"
                  />
                </svg>
              </label>
              {errors.name && (
                <p role="alert" className="text-rose-500">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div>
              <label className="input relative">
                <input
                  className="input__field block w-full rounded-none border border-midnight-500 bg-transparent py-3 px-3 font-t focus:outline-0"
                  type="email"
                  placeholder=" "
                  {...register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                <span className="input__label absolute left-0 top-0 my-[7px] mx-1 origin-top-left translate-x-0 translate-y-0 cursor-text whitespace-nowrap bg-white-500 py-[6px] px-3 font-h">
                  Email
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
                    fill="currentColor"
                  />
                </svg>
              </label>
              {errors.email && (
                <p role="alert" className="text-rose-500">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <label className="input relative">
              <textarea
                name="comment"
                rows="4"
                className="input__field block w-full rounded-none border border-midnight-500 bg-transparent py-3 px-3 font-t focus:outline-0"
                placeholder=" "
                {...register('message', { required: 'Message is required' })}
              />
              <span className="input__label absolute left-0 top-0 my-[7px] mx-1 origin-top-left translate-x-0 translate-y-0 cursor-text whitespace-nowrap bg-white-500 py-[6px] px-3 font-h">
                Message
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="absolute top-2 right-3"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z" />
              </svg>
            </label>
            <button className="btn-outline mt-2 self-end">
              <input
                type="submit"
                value="Submit"
                className="cursor-pointer font-bold uppercase"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
