import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const Author = ({ author, date }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
      <div className="flex items-center gap-3">
        <div className="">
          {author.photo ? (
            <Image
              src={author.photo.url}
              alt={author.name}
              width="90"
              height="90"
              className="object-cover align-middle"
              loading="lazy"
            />
          ) : (
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="user"
              width="90"
              height="90"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
          )}
        </div>
        <div>
          <span className="font-h text-sm font-light italic text-midnight-300">
            Written By
          </span>
          <Link href={`/author/${author.slug}`}>
            <h3 className="cursor-pointer text-2xl font-semibold">
              {author.name}
            </h3>
          </Link>
          <p className="font-ct text-sm">{author.bio.slice(0, 45)}...</p>
        </div>
      </div>
      <div className="flex basis-0 items-center gap-2 text-gray-400 md:basis-56 md:justify-end">
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="field-time"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <defs>
            <style></style>
          </defs>
          <path d="M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z"></path>
          <path d="M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z"></path>
        </svg>
        <span className="text-sm font-bold">
          {moment(date).format('MMM DD, YYYY')}
        </span>
      </div>
    </div>
  )
}

export default Author
