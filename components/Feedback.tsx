"use client"

import React, { useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Feedback() {
  return (
    <section className=' mt-[-40px]'>
      <div className='container mx-auto mt-28'>
        <h1 className='text-5xl  font-paytone  text-[#1C1C1C] tracking-wider text-center'>O que estão dizendo sobre nós!</h1>
      </div>
      <div className="mt-28 container mx-auto ">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          slidesPerView={3} 
          loop={true}
        >
          <SwiperSlide >
            <div className="bg-gray-200 w-[400px] h-[600px] rounded-lg flex justify-center items-center">
              <p>Slide 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 w-[400px] h-[600px] rounded-lg flex justify-center items-center">
              <p>Slide 2</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 w-[400px] h-[600px] rounded-lg flex justify-center items-center">
              <p>Slide 3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 w-[400px] h-[600px] rounded-lg flex justify-center items-center">
              <p>Slide 3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 w-[400px] h-[600px] rounded-lg flex justify-center items-center">
              <p>Slide 3</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Feedback;
