"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOSWrapper from "@/app/utils/AOSWrapper";
import Image from "next/image";

function History({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <AOSWrapper>
          <div className="w-full mx-auto bg-primary relative text-center md:text-left">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="relative md:h-[650px] h-[720px] bg-black" >
            {/* Background Image */}
            <Image
              src={data[0].img} // e.g. "/assets/banners/1.jpeg"
              alt={data[0].title}
              fill
              className="object-cover z-0"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-50 "></div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-6xl h-full flex md:grid md:grid-cols-2 flex-col py-10 md:py-20 md:px-10 px-4 items-center justify-between">
              <div data-aos="fade-right">
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-raleway py-5">
                  {data[0].title}
                </h3>
                {data[0].paragraphs.map((para, index) => (
                  <p key={index} className="text-para pt-4">
                    {para}
                  </p>
                ))}
              </div>
              <div className="flex justify-self-end" data-aos="fade-left">
                <button
                  ref={nextRef}
                  className="text-red-600 p-3 flex items-center justify-center gap-2 md:text-2xl text-xl font-raleway font-bold hover:group cursor-pointer"
                >
                  <span className="text-gray-400 group-hover:text-white">
                    Now
                  </span>
                  <FaArrowRight size={50} />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="relative md:h-[650px] h-[720px]">
            {/* Background Image */}
            <Image
              src={data[1].img} // e.g. "/assets/banners/2.jpeg"
              alt={data[1].title}
              fill
              className="object-cover z-0"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-50 "></div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-6xl h-full flex md:grid md:grid-cols-2 flex-col-reverse py-10 md:py-20 md:px-10 px-4 items-center justify-between">
              <div data-aos="fade-right">
                <button
                  ref={prevRef}
                  className="text-red-600 p-3 flex items-center justify-center gap-2 md:text-2xl text-xl font-raleway font-bold leading-none hover:group cursor-pointer"
                >
                  <FaArrowLeft size={50} />
                  <span className="text-gray-400 group-hover:text-white">
                    2003
                  </span>
                </button>
              </div>
              <div data-aos="fade-left">
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-raleway py-5">
                  {data[1].title}
                </h3>
                {data[1].paragraphs.map((para, index) => (
                  <p key={index} className="text-para pt-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </AOSWrapper>

  );
}

export default History;
