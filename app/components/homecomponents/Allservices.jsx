import React from 'react'
import { Buttonsolid } from '../ui/buttons/Buttons'
import Link from 'next/link'
import AOSWrapper from '@/app/utils/AOSWrapper'

function Allservices({ data }) {
  return (
    <AOSWrapper>
      <div className='w-full mx-auto bg-primary'>
        <div className='max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-raleway text-white'>All Services</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-4'>
            {
              data.map((item, index) => (
                <div key={index} className='bg-btn w-full min-h-40 border-1 border-gray-950 p-8 hover:bg-black hover:border-btn transition duration-300 '  data-aos="zoom-in">
                  <h3 className='font-raleway text-2xl font-extralight text-gray-200 mb-4'>{item.title}</h3>
                  <p className="font-raleway text-base font-light text-gray-300 md:min-h-35 min-h-20 mb-5">
                    {String(item.description || "")
                      .split(" ")
                      .slice(0, 30)
                      .join(" ")}
                  </p>
                  <div className='w-35'>
                    <Link href={item.link}>
                      <Buttonsolid>
                        Click here
                      </Buttonsolid>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </AOSWrapper>

  )
}

export default Allservices