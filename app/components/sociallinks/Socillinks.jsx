import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

function Socillinks() {
    return (
        <>
            {/* Desktop */}
            <div className='md:fixed hidden md:block left-2 top-1/2 transform -translate-y-1/2 z-99'>
                <div className='flex flex-col gap-2.5 items-center'>
                    <a 
                        href="https://www.linkedin.com/company/leads-and-brands" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit us on LinkedIn"
                        className='text-white hover:text-red-600'
                    >
                        <FaLinkedinIn size={17} />
                    </a>
                    <a 
                        href="https://www.facebook.com/Leads-And-Brands-105606992025898" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit us on Facebook"
                        className='text-white hover:text-red-600'
                    >
                        <FaFacebookF size={17} />
                    </a>
                    <a 
                        href="https://www.instagram.com/leadsandbrands/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit us on Instagram"
                        className='text-white hover:text-red-600'
                    >
                        <FaInstagram size={17} />
                    </a>
                    <a 
                        href="https://twitter.com/LeadsAndBrands" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit us on Twitter"
                        className='text-white hover:text-red-600'
                    >
                        <FaTwitter size={17} />
                    </a>
                    <a 
                        href="https://api.whatsapp.com/send?phone=+917974777707&text=Hello" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Chat with us on WhatsApp"
                        className='text-white hover:text-red-600'
                    >
                        <FaWhatsapp size={17} />
                    </a>
                    <a 
                        href="https://goo.gl/maps/i1SNoKLasc2DNhna9" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Find us on Google Maps"
                        className='text-white hover:text-red-600'
                    >
                        <FaMapMarkerAlt size={17} />
                    </a>

                    <div className='font-raleway -rotate-90 mt-7 tracking-wides font-bold text-white'>
                        <h4>Follow us</h4>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className='flex md:hidden flex-col mt-4 items-center '>
                <div className='flex gap-2.5'>
                    <a 
                        href="https://www.linkedin.com/company/leads-and-brands" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit us on LinkedIn"
                        className='text-white hover:text-red-600'
                    >
                        <FaLinkedinIn size={17} />
                    </a>
                    <a 
                        href="https://www.facebook.com/Leads-And-Brands-105606992025898" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit us on Facebook"
                        className='text-white hover:text-red-600'
                    >
                        <FaFacebookF size={17} />
                    </a>
                    <a 
                        href="https://www.instagram.com/leadsandbrands/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit us on Instagram"
                        className='text-white hover:text-red-600'
                    >
                        <FaInstagram size={17} />
                    </a>
                    <a 
                        href="https://twitter.com/LeadsAndBrands" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit us on Twitter"
                        className='text-white hover:text-red-600'
                    >
                        <FaTwitter size={17} />
                    </a>
                    <a 
                        href="https://api.whatsapp.com/send?phone=+917974777707&text=Hello" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Chat with us on WhatsApp"
                        className='text-white hover:text-red-600'
                    >
                        <FaWhatsapp size={17} />
                    </a>
                    <a 
                        href="https://goo.gl/maps/i1SNoKLasc2DNhna9" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Find us on Google Maps"
                        className='text-white hover:text-red-600'
                    >
                        <FaMapMarkerAlt size={17} />
                    </a>
                </div>
                <div className='font-raleway mt-4 tracking-wides font-bold text-white'>
                    <h4>Follow us</h4>
                </div>
            </div>
        </>
    );
}

export default Socillinks;
