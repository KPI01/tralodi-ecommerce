'use client'
import { useEffect } from 'react'

export default function Carousel () {
  useEffect(() => {
    require('bootstrap/js/src/carousel')
  })

  return (
    <div id='carouselExampleRide' className='carousel slide' data-bs-ride='true'>
      <div className='carousel-inner'>
        <div className='carousel-item active' data-bs-interval='4000'>
          <img src='/png/banner-main.png' className='d-block w-100' alt='Banner 1' />
        </div>
        <div className='carousel-item' data-bs-interval='4000'>
          <img src='...' className='d-block w-100' alt='Banner 2' />
        </div>
        <div className='carousel-item' data-bs-interval='4000'>
          <img src='...' className='d-block w-100' alt='Banner 3' />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleRide'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleRide'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}
