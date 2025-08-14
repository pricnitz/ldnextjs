import React from 'react'
import { Buttonfill } from '../ui/buttons/Buttons'
import Link from 'next/link'

function Whatwedo({ data }) {
    return (
        <div className='w-full mx-auto bg-primary'>
            <div className='max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4 grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div className='max-w-full md:max-w-110'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-raleway text-white'>{data.title}</h2>
                    {
                        data.description.map((descriptionitem, index) => (
                            <p key={index} className='mt-4 text-para font-light'>
                                {descriptionitem}
                            </p>
                        ))
                    }
                    <div className='mt-8 max-w-[250px]'>
                        <Buttonfill >
                            View All Services
                        </Buttonfill>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 '>
                    {
                        data.cards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.link || "#"}  // <-- Add href
                                className="bg-btn p-4 border-black m-0.5 shadow-md flex flex-col justify-center text-center hover:shadow-lg hover:bg-black transition"
                            >
                                <img src={card.img} alt={card.title} className="w-10 mx-auto" />
                                <h3 className="mt-2 text-sm text-para">{card.title}</h3>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Whatwedo