"use client";
import React from "react";
import Accordion from "../ui/accordionItem/Accordion";
import Form from "../ui/form/Form";

function Careerhero({ jobOpenings }) {

    const careerFields = [
        { name: "name", label: "Name", placeholder: "Name" },
        { name: "email", label: "Email Address", placeholder: "Email Address" },
        { name: "contact", label: "Contact No.", placeholder: "Contact No." },
        {
            name: "profile",
            label: "Profile",
            type: "select",
            placeholder: "Select a profile",
            options: [
                { label: "Frontend Developer", value: "frontend" },
                { label: "Backend Developer", value: "backend" },
            ],
        },
        { name: "cv", label: "Attach CV", type: "file", accept: ".pdf,.doc,.docx" },
        {
            name: "passportImage",
            label: "Attach Passport size Image",
            type: "file",
            accept: "image/*",
        },
        { name: "message", label: "Message", placeholder: "Message", type: "textarea" },
    ];


    const handleCareerFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const contact = formData.get("contact");
        const profile = formData.get("profile");
        const message = formData.get("message");

        const fullMessage = `Career Enquiry:
        Name: ${name}
        Email: ${email}
        Contact: ${contact}
        Profile: ${profile}
        Message: ${message}
            
        (Attached files are not supported in WhatsApp)`;

        const phoneNumber = "917974777707"; // WhatsApp number
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="w-full mx-auto bg-primary">
            <div className="max-w-6xl mx-auto py-10 md:py-20 md:px-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Job Openings Section */}
                <div className="lg:col-span-2 flex justify-between">
                    <div className="w-full">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-raleway text-white">
                            Join The Crew
                        </h2>
                        <p className="text-para -mt-0.5">Current openings:</p>
                        <div className="mt-4">
                            <Accordion items={jobOpenings} />
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="lg:col-span-2">
                    <div className="px-6">
                        <h2 className="text-md md:text-xl lg:text-2xl font-raleway text-white mb-4">
                            Tell us about yourself
                        </h2>
                        <Form
                            onSubmit={handleCareerFormSubmit}
                            fields={careerFields}
                            submitText="Apply Now"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Careerhero;
