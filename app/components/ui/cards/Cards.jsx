'use client';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


export const MemberCard = ({ image, name, role }) => {
  return (
    <div className="relative shadow-md h-60 w-full group hover:scale-100 transition-transform duration-300 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover absolute left-0 top-0 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
      />
      <div className="absolute bottom-0 z-10 w-full bg-gradient-to-t from-black to-transparent group-hover:from-red-500 group-hover:to-transparent p-4 transition-all duration-300">
        <h5 className="font-bold text-lg text-white">{name}</h5>
        <p className="text-white text-sm">{role}</p>
      </div>
    </div>
  );
};

export const PortfolioCard = ({ images, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentIndex(index); // ✅ open at clicked image
              setIsOpen(true);
            }}
            className="relative mb-2 shadow-md group cursor-pointer overflow-hidden rounded-lg"
          >
            <img
              src={img.src}
              alt={`${title} - ${index}`}
              className="w-full h-auto object-cover grayscale-50 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
             
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-5 text-white text-3xl"
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <img
            src={images[currentIndex].src}
            alt={`${title} - ${currentIndex}`}
            className="max-h-[90%] max-w-[90%] object-contain rounded-xl shadow-lg"
          />

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-5 text-white text-3xl"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
};
