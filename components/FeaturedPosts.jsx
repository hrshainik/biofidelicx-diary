import React, { useEffect, useState } from 'react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FeaturedPostCard } from '../components'
import { getFeaturedPosts } from '../services'

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result)
      setDataLoaded(true)
    })
  }, [])

  return (
    <div className="w-full">
      <div className="container mx-auto mb-8" style={{ marginTop: '-3rem' }}>
        <Swiper
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          slidesPerView={1.5}
          initialSlide={2}
          centeredSlides={true}
          loop
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
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
          {dataLoaded &&
            featuredPosts.map((post, index) => (
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
