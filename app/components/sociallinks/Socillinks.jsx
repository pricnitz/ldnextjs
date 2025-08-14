import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

function Socillinks() {
    return (
        <>
            <div className='md:fixed hidden md:block left-2 top-1/2 transform -translate-y-1/2 z-99'>
            <div className='flex flex-col gap-2.5 items-center'>
                <a href="#" className='text-white hover:text-red-600'><FaLinkedinIn size={17} /></a>
                <a href="#" className='text-white hover:text-red-600'><FaFacebookF size={17} /></a>
                <a href="#" className='text-white hover:text-red-600'><FaInstagram size={17} /></a>
                <a href="#" className='text-white hover:text-red-600'><FaTwitter size={17} /></a>
                <a href="#" className='text-white hover:text-red-600'><FaWhatsapp size={17} /></a>
                <a href="#" className='text-white hover:text-red-600'><FaMapMarkerAlt size={17} /></a>
                <div className='font-raleway -rotate-90 mt-7 tracking-wides font-bold'><h5>Follow us</h5></div>
            </div>
        </div>
        <div className='flex md:hidden flex-col mt-4 items-center '>
                <div className='flex gap-2.5'>
                    <a href="#" className='text-white hover:text-red-600'><FaLinkedinIn size={17} /></a>
                    <a href="#" className='text-white hover:text-red-600'><FaFacebookF size={17} /></a>
                    <a href="#" className='text-white hover:text-red-600'><FaInstagram size={17} /></a>
                    <a href="#" className='text-white hover:text-red-600'><FaTwitter size={17} /></a>
                    <a href="#" className='text-white hover:text-red-600'><FaWhatsapp size={17} /></a>
                    <a href="#" className='text-white hover:text-red-600'><FaMapMarkerAlt size={17} /></a>
                </div>
                <div className='font-raleway mt-4 tracking-wides font-bold'><h5>Follow us</h5></div>
            </div>
        </>
    );
}

export default Socillinks;
