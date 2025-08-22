import React from 'react'
import Link from 'next/link'
import { MemberCard } from '../ui/cards/Cards'
import AOSWrapper from '@/app/utils/AOSWrapper'


function Coreteam({ data }) {
  return (
    <AOSWrapper>
      <div className='w-full mx-auto bg-primary text-center md:text-left'>
        <div className='max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='flex flex-col justify-center gap-3' data-aos="fade-right">
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-raleway text-white'>Core Team</h2>
            <h2 className='text-xl md:text-2xl text-red-600'>Teamwork <br /> <span className='text-white'>makes the </span> <br /> dream work.</h2>
            <p className='text-gray-300 font-bold'>Join the crew <Link href="/career">Leads and Brand</Link> </p>
          </div>
          <div className='col-span-2 grid grid-cols-2 md:grid-cols-3'>
            {data.map((member, index) => (
              <MemberCard
              
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </div>

    </AOSWrapper>

  )
}

export default Coreteam