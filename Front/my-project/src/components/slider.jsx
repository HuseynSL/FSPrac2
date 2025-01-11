import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';  
import Button from 'react-bootstrap/Button';  

function Slider() {
  return (
    <div className="my-swiper-container relative">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={0}
        pagination={{ clickable: true }}
        navigation
      >
        
           
                
            
        
        <SwiperSlide className='relative'>
          <img src="https://files.oaiusercontent.com/file-ApKRZUFiSCw9qoKT35zAgp?se=2025-01-11T22%3A27%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3093fcb2-709c-4c3c-907d-7272946b3551.webp&sig=5m2gPZjJrzb6ELrxiw6/KkFAng40JnowrDD20yI1KuY%3D" alt="Slide 1" />
        </SwiperSlide>

        <div className="absolute p-5 ">
            <span>Committed to success</span>
                <h1>We help to grow your business</h1>
                <p >Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur.</p>
                <Button className='btn btn-danger'>Our Services</Button>
        </div>

        <SwiperSlide className='relative'>
          <img src="https://files.oaiusercontent.com/file-ApKRZUFiSCw9qoKT35zAgp?se=2025-01-11T22%3A27%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3093fcb2-709c-4c3c-907d-7272946b3551.webp&sig=5m2gPZjJrzb6ELrxiw6/KkFAng40JnowrDD20yI1KuY%3D" alt="Slide 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
