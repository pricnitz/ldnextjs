import React from 'react';

export default function Bloghero({ data }) {
  return (
    <div className='max-w-6xl mx-auto pt-10 md:pt-30 md:px-4 px-4 text-para'>
      <h1 className='text-white text-3xl md:text-4xl font-raleway mb-6 text-center flex flex-col md:flex-row'>
        {data.title}
      </h1>
      <p className='mt-4'>{data.subtitle}</p>
    </div>
  );
}