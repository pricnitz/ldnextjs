import React from 'react'
import Image from 'next/image'

function Serviceshero({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Left Section */}
      <div className='mb-4 md:mb-0 col-span-2'>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-raleway text-white mb-3 font-bold">
          <span className="text-red-600">{data.title}</span> {data.highlight}
        </h1>
        {data.description.map((para, index) => (
          <p key={index} className="text-para mb-4"  dangerouslySetInnerHTML={{ __html: para }} />
        ))}
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center md:justify-end">
        {data.image && (
          <Image
            src={data.image.src}
            alt={data.image.alt}
            className={`w-full max-w-[250px] h-auto object-contain ${data.image.style || ""}`}
          />
        )}
      </div>
    </div>
  )
}

export default Serviceshero
