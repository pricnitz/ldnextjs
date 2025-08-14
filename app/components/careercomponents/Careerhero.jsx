import React from 'react'
import Accordion from '../ui/accordionItem/Accordion'
import Form from '../ui/form/Form'

function Careerhero({jobOpenings}) {
    return (
        <div className='w-full mx-auto bg-primary'>
            <div className='max-w-6xl mx-auto py-10 md:py-20 md:px-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='lg:col-span-2 flex justify-between'>
                    <div className=' w-full'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-raleway text-white'>Join The Crew</h2>
                        <p className='text-para -mt-0.5'>Current openings:</p>
                        <div className='mt-4'>
                            <Accordion items={jobOpenings} />
                        </div>

                    </div>
                </div>
                <div className='lg:col-span-2'>
                    <div className=' px-6 '>
                        <h2 className='text-md md:text-xl lg:text-2xl font-raleway text-white mb-4'>Tell us about your self</h2>
                        <Form />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Careerhero