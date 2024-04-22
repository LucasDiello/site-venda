"use client"

import React, { useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import arrowLeft from '@/public/arrowLeft.png';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Feedback() {
  return (
    <section className='linear-bg4'>
      <div className='container mx-auto lg:pt-10 flex justify-center items-center flex-col'>
        <h1 className='text-5xl  font-paytone  text-[#1C1C1C] tracking-wider text-center m-0'>O que estão dizendo sobre nós!</h1>
        <p className='text-center text-xs m-4 lg:pb-20 '>
          Um pouco do que nossos clientes relataram sobre a experiência de terem feito parte do nosso programa.
        </p>
        <img className=' absolute right-80 mt-48 w-72 hidden lg:flex' src={arrowLeft.src} alt="" />
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
