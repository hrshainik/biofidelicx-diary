import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
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
    <div className="w-full bg-white-500">
      <div className="container mx-auto mb-8">
        <Swiper spaceBetween={30} slidesPerView={3}>
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
