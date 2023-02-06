import { useEffect, useState } from 'react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FeaturedPostCard, FeaturedPostCardSkeleton } from '../components'
import { getFeaturedPosts } from '../services'

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result)
    })

    if (featuredPosts) {
      setTimeout(() => {
        setDataLoaded(true)
      }, 2000)
    }
  }, [])

  if (!dataLoaded) {
    return (
      <div className="w-full">
        <div className="container mx-auto mb-8" style={{ marginTop: '-7rem' }}>
          <p className="relative z-10 text-center font-h text-xl font-bold leading-loose text-white-500 md:text-left">
            The Highlights
          </p>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            slidesPerView={1.5}
            centeredSlides={true}
            loop
            breakpoints={{
              600: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              960: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              1200: {
                slidesPerView: 4,
                centeredSlides: false,
              },
              1600: {
                slidesPerView: 5,
                centeredSlides: false,
              },
              2000: {
                slidesPerView: 6,
                centeredSlides: false,
              },
              2400: {
                slidesPerView: 7,
                centeredSlides: false,
              },
            }}
          >
            <SwiperSlide>
              <FeaturedPostCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedPostCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedPostCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedPostCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedPostCardSkeleton />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 w-full">
      <div className="container mx-auto mb-8" style={{ marginTop: '-7rem' }}>
        <p className="text-center font-h text-xl font-bold leading-loose text-white-500 md:text-left">
          The Highlights
        </p>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          slidesPerView={1.5}
          centeredSlides={true}
          loop
          breakpoints={{
            600: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            960: {
              slidesPerView: 3,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 4,
              centeredSlides: false,
            },
            1600: {
              slidesPerView: 5,
              centeredSlides: false,
            },
            2000: {
              slidesPerView: 6,
              centeredSlides: false,
            },
            2400: {
              slidesPerView: 7,
              centeredSlides: false,
            },
          }}
        >
          {featuredPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <FeaturedPostCard key={index} post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default FeaturedPosts
