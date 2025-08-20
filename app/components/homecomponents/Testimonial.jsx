"use client"
import React, { useRef } from 'react';
// import Rating from '@/public/assets/svg/grating5star.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';



function Testimonial({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full mx-auto bg-primary relative">
      <div className="max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4">
        <h2 className="text-white text-3xl md:text-4xl font-raleway mb-6 text-center flex flex-col md:flex-row items-center justify-center gap-3">
          Testimonials
          {/* <img className="h-12" src={Rating} alt="Google Reviews" /> */}
        </h2>

        <div className="relative group">
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="md:block hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow hover:bg-transparent opacity-0 group-hover:opacity-100 transition"
          >
            <MdKeyboardDoubleArrowLeft size={35} className="text-white-600 text-para hover:text-red-600 transition delay-300 cursor-pointer" />
          </button>
    
          <button
            ref={nextRef}
            className="md:block hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow hover:bg-transparent opacity-0 group-hover:opacity-100 transition"
          >
            <MdKeyboardDoubleArrowRight size={35} className="text-white-600 text-para hover:text-red-600 transition delay-300 cursor-pointer" />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
            
              >
                <div className=" text-center flex flex-col items-center justify-center min-h-[250px]">
                  <p className="text-para text-lg md:text-xl italic max-w-3xl mx-auto">
                    {item.text}
                  </p>

                  {item.stars && (
                    <div className="flex justify-center mt-4">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          <FaStar />
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="text-white text-lg font-semibold mt-4">{item.name}</h3>
                  {item.company && (
                    <p className="text-sm text-gray-300">{item.company}</p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
