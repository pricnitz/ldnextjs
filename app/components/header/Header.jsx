
import React from 'react';
import Marquee from "react-fast-marquee"; // Correct import

export default function Header({ data }) {
  const { title } = data;

  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Use the Marquee component with its props */}
      <Marquee 
        className='max-w-4xl mx-auto p-1' 
        pauseOnHover={true} 
        speed={50}
        gradient={false}
      >
        <h1 className='whitespace-nowrap text-para'>
          {title}
        </h1>
      </Marquee>
    </div>
  );
}