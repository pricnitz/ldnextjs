import React from 'react'
import Link from 'next/link'


function Coreteam({ data }) {
  return (
    <div className='w-full mx-auto bg-primary'>
      <div className='max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='flex flex-col justify-center gap-3'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-raleway text-white'>Core Team</h2>
          <h4 className='text-xl md:text-2xl text-red-600'>Teamwork <br /> <span className='text-white'>makes the </span> <br /> dream work.</h4>
          <p className='text-gray-300 font-bold'>Join the crew <Link href="/career">Leads and Brand</Link> </p>
        </div>
        <div className='col-span-2 grid grid-cols-2 md:grid-cols-3'>
          {data.map((member, index) => (
            <div
              key={index}
              className="relative shadow-md h-60 w-full group hover:scale-100 transition-transform duration-300 overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover absolute left-0 top-0 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-0 z-10 w-full bg-gradient-to-t from-black to-transparent group-hover:from-red-500 group-hover:to-transparent p-4 transition-all duration-300">
                <h5 className="font-bold text-lg text-white">{member.name}</h5>
                <p className="text-white text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Coreteam