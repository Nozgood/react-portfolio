import React from 'react'
import testiUno from '../../assets/testimonial-exemple-1.jpg'
import testiDos from '../../assets/testimonial-exemple-2.jpg'
import testiTres from '../../assets/testimonial-exemple-3.jpg'

//Swiper
// Swiper core and require modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const testimonial = [
  {
    id: 4,
    img: testiUno,
    name: 'La Copine',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia totam et incidunt praesentium architecto iusto maiores labore, non temporibus excepturi consequatur reprehenderit libero est quo quae blanditiis assumenda aliquid.',
  },
  {
    id: 5,
    img: testiDos,
    name: 'La deuxième copine',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia totam et incidunt praesentium architecto iusto maiores labore, non temporibus excepturi consequatur reprehenderit libero est quo quae blanditiis assumenda aliquid.',
  },
  {
    id: 6,
    img: testiTres,
    name: 'Srab',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia totam et incidunt praesentium architecto iusto maiores labore, non temporibus excepturi consequatur reprehenderit libero est quo quae blanditiis assumenda aliquid.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ 
        clickable: true,
        }}
      >
        {
          testimonial.map(({id, img, name, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={img} alt='' />
                </div>
                <h5 className='client__name'>
                  {name}
                </h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials