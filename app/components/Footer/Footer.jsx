"use client"
import React from "react";
import Link from "next/link";
import Form from "../ui/form/Form";
import { FaLocationDot } from "react-icons/fa6";
import Socillinks from "../sociallinks/Socillinks";

function Footer() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const businessName = formData.get("businessName");
        const website = formData.get("website");
        const email = formData.get("email");
        const contact = formData.get("contact");
        const subject = formData.get("subject");
        const message = formData.get("message");
        const fullMessage = `New Enquiry: Business Name: ${businessName} Name: ${name} Email: ${email} Website: ${website} Subject: ${subject} Contact: ${contact} Message: ${message}`;
        const phoneNumber = "917974777707"; // WhatsApp number
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="w-full bg-primary text-white relative">
            <div
                className="absolute max-h-screen inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url("/assets/banners/map.png")` }}
            />
            <div className="relative max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4">
                <h2 className="text-white text-3xl md:text-4xl font-raleway mb-10">Say Hello...</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Form onSubmit={handleFormSubmit} />
                    <div className="grid md:grid-rows-3 grid-cols-1 gap-1 md:my-0 my-10">
                        <div className="row-span-2 flex gap-1 my-auto justify-center items-center">
                            <FaLocationDot className="text-red-600 text-2xl" />
                            <h3 className="text-xl font-raleway">Leads & Brands</h3>
                        </div>
                        <div className="row-span-1 flex flex-col gap-1 my-auto md:justify-start justify-center md:items-start items-center md:text-start text-center md:px-10 px-0">
                            <div className="flex gap-1 my-auto justify-start text-gray-400 ">
                                <Link className="text-red-700" href="/career">Career</Link> | <Link className="text-red-700" href="/blogs">Blogs</Link> | <Link className="text-red-700" href="/#services">Services</Link> | <Link className="text-red-700" href="/#sitemap">Sitemap</Link> | <Link className="text-red-700" href="/faq">Faq</Link>
                            </div>
                            <span className=" flex gap-1">
                                Email:
                                <a href="mailto:info@leadsandbrands.com" className="text-white transition-colors">info@leadsandbrands.com</a>
                            </span>
                            <span className=" flex gap-1">
                                Contact No:
                                <a href="tel:+919774777707" className="text-white transition-colors">91-7974777707</a>
                                <a href="tel:+9175535535119" className="text-white transition-colors"> +91 755 3553119</a>
                            </span>
                            <address className="text-gray-100 transition-colors "><span>Address:</span> Opp. South Avenue, G3, Gulmohar, Bhopal. 462039</address>
                            <div className="md:hidden">
                                <Socillinks />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:mt-10 md:py-4 py-2 text-center text-gray-400 text-sm">
                    Copyright © 2025 All Rights Reserved By : <span className="text-nowrap">Leads & Brands.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;